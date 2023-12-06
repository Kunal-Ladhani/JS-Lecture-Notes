const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

dotenv.config({ path: `config.env` });
const PORT = process.env.PORT || 8080;

// LOG REQUESTS
app.use(morgan('tiny'));


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// PARSE REQUESTS TO body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById("643ce6fac22a9059b9cede89")
    .then(user => {
      req.user = new User(user.name, user.email, user._id, user.cart);
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(PORT, `localhost`, () => {
    console.log(`Listening on port number - ${PORT}`);
    console.log(`Connected to -- http://localhost:${PORT}`);
  });
});

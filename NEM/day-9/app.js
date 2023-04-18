// NODEJS dependencies
const path = require('path');

// 3rd party dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// importing routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// importing controllers
const errorController = require('./controllers/error');

// importing models
const User = require('./models/user');

// importing db connection utility
const connectDB = require('./util/database');

// express app initialization.
const app = express();

// PORT and HOSTNAME Configuration
dotenv.config({ path: `config.env` });
const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || `localhost`;

// LOG REQUESTS
app.use(morgan('tiny'));
// app.use(logger('dev'));


// Enable ALL cors requests
app.use(cors());


app.use(cookieParser());

// parse request as JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// parse request as JSON using body-parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// allowing static file serving
app.use(express.static(path.join(__dirname, 'public')));


// View engine configuration
app.set('view engine', 'ejs');
app.set('views', 'views');




// adding the user manually
app.use((req, res, next) => {
  User.findById("643ce6fac22a9059b9cede89")
    .then(user => {
      req.user = new User(user.name, user.email, user._id, user.cart);
      next();
    })
    .catch(err => console.log(err));
});

// setting routes for serverside app
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// default error page if no route matches
app.use(errorController.get404);

// connect to db.
connectDB()
  .then(result => {
    // setting up server.
    app.listen(PORT, HOSTNAME, () => {
      console.log(`Listening on port number : ${PORT}`);
      console.log(`Server Running at : http://${HOSTNAME}:${PORT}`);
    });
  })
  .catch(err => console.error(err));
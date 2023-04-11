const userDB = require('../models/model');

// create and save new user
exports.createUser = (req, res, next) => {
    //validate request
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty!"
        });
        return;
    }

    // new user
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    // save user to user DB
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "some error occurred"
            });
        })
}

// retrieve and return 1 user
exports.findUser = (req, res, next) => {

}

// update a new identified user by userid
exports.updateUser = (req, res, next) => {

}

// delete a user by userid
exports.deleteUser = (req, res, next) => {

}




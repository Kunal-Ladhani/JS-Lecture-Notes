const userDB = require('../models/model');

// create and save new user
exports.createUser = (req, res, next) => {
    //validate request
    if (!req.body) {
        res.status(400).json({
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
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({
                message: error.message || "some error occurred"
            });
        })
}

// retrieve and return 1 user
exports.findUser = (req, res, next) => {
    userDB.find()
        .then(user => res.json(user))
        .catch(err => {
            res.status(500)
                .json({
                    message: err.message || "error occured to find user info."
                });
        });
}

// update a new identified user by userid
exports.updateUser = (req, res, next) => {
    if (!req.body) {
        return res.status(400)
            .json({
                message: "Data to update cannot be empty"
            });
    }

    console.log(req.body);

    const id = req.paramas.id;
    userDB.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).json({ message: `cannot update user with id = ${id}` });
            } else {
                res.json(data);
            }
        })
        .catch(err => {
            res.status(500)
                .json({ message: err.message || "error while updating user information" });
        })
}

// delete a user by userid
exports.deleteUser = (req, res, next) => {
    const id = req.paramas.id;

    userDB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404)
                    .send({ message: `Cannot delete with id = ${id}` });
            } else {
                res.send({
                    message: "User was deleted successfully"
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send({ message: "could not delete the data with id = " + id });
        })
}




exports.homeRoute = (req, res, next) => {
    res.render('index');
};

exports.addUser = (req, res, next) => {
    res.render('add_user');
};

exports.updateUser = (req, res, next) => {
    res.render('update_user');
};

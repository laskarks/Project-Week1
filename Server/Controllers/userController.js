const User = require ('../Models/user');
const hashPassword = require('../helpers/hashPassword');

class UserController {

    static create(req,res) {

        User.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        .then (function(user) {
            res.status(200).json(user)
        })
        .catch(function(err) {
            res.status(500).json(err)
        })

    };


}//


module.exports = UserController
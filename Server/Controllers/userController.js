const User = require ('../Models/user');
const hashPassword = require('../helpers/hashPassword');
const { generateToken } = require('../helpers/jwt')

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

    static readAll (req,res) {
        User.find({})
        .then(function(Users) {
            res.status(200).json(Users)
        })
        .catch(function(err) {
            res.status(500).json(err)
        }) 
    };  
    
    static login (req,res) {
        const {username, password} = req.body
        User.findOne({username: username})
            .then (function (user) {
                
                if (user) {
                    if (hashPassword.check(password,user.password)) {
                        let payload = {
                            id: user.id
                        }
                        let token = generateToken(payload)
                        req.headers.token = token;
                        res.status(200).json(token)
                    }else {
                        res.status(400).json(
                            {message: "Invalid Username / Password"}
                        )
                    }
                }else {
                    res.status(404).json('username not found')
                }
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    };


}//


module.exports = UserController
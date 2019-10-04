const {OAuth2Client} = require('google-auth-library')
const jwt = require('jsonwebtoken')

class UserController {
    static googleLogin(req, res) {
        const client = new OAuth2Client(process.env.GOOGLECLIENTID)
        client.verifyIdToken ({
            idToken: req.body.id_token,
            audience: process.env.GOOGLECLIENTID
        })
        .then(ticket => {
            const payload = ticket.getPayload();
            const generateToken = jwt.sign(payload, process.env.SECRET)
            res.status(200).json(generateToken)
        })
        .catch(console.log)
    }

}

module.exports = UserController
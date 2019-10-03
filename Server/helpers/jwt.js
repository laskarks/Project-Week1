var jwt = require('jsonwebtoken');
const 

function generateToken(payload) {
    return jwt.sign(payload, secret);
};

function tokenVerify(token) {
    return jwt.verify(token, secret);
};

module.exports = {
    generateToken,
    tokenVerify
}

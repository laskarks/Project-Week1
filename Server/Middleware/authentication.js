const { tokenVerify } = require ('../helpers/jwt')

function Authentication (req,res,next) {
    try {
        const decoded = tokenVerify(req.headers.token)
        req.decoded = decoded;
        next();
    } catch(err) {
        res.status(403).json({msg: 'You are not you'})
    }
};

module.exports = Authentication



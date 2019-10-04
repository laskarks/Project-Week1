const forexAPI = require('../apis/forex')

class ForexController {
    static getRealTimeData(req, res, next) {
        const { base } = req.query

        forexAPI.get(`/api/v1/forex?base=${base}&api_token=${process.env.CURRENCY_API_KEY}`)
        .then(response => {
                console.log(response);
                res.status(200).json(response)
            })
            .catch(next)
    }

}
module.exports = ForexController
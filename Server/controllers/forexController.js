const forexAPI = require('../apis/forex')

class ForexController {

    static getRealTimeData(req, res, next) {
        const { base } = req.query

        forexAPI.get(`/api/v1/forex?base=${base}&api_token=${process.env.CURRENCY_API_KEY}`)

        .then(({ data }) => {
                console.log(data);

                res.status(200).json(data)
            })
            .catch(next)
    }

}
module.exports = ForexController
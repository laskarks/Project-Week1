const axios = require('axios');
// const axio = axios.create({
//     baseUrl: ''
// });

class StockMarket {
    static readAll(req,res) {
        axios.get('https://financialmodelingprep.com/api/v3/stock/real-time-price')
            .then(function ({data}) {
                //console.log(response)
                res.status(200).json({
                    data : data.stockList
                })
            })
            .catch(function (err) {
                console.log(err)
                res.status(500).json(err)
            })
    }
}

module.exports = StockMarket;
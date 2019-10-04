const axios = require('axios');
const axio = axios.create({
    url: 'https://financialmodelingprep.com/api/v3/stock'
});

class StockMarket {
    static readAll(req,res) {
        axio.get('/real-time-price')
            .then(function ({data}) {
               
                res.status(200).json({
                    data : data.stockList
                })
            })
            .catch(function (err) {
                console.log(err)
                res.status(500).json(err)
            })
    };

    static readOne(req,res) {
        let companyCode = req.body.companyCode
        axios.get(`https://financialmodelingprep.com/api/v3/stock/real-time-price/${companyCode}`)
            .then(function ({data}) {
                res.status(200).json(data.companyPriceList)
            })
            .catch(function(err) {
                res.status(500).json(err)
            })
    };

    static readFew (req,res) {
        axios.get('https://financialmodelingprep.com/api/v3/majors-indexes')
            .then(function({data}) {
                res.status(200).json(data)
            })
            .catch(function (err) {
                res.status(500).json(err)
            })
    };
}

module.exports = StockMarket;
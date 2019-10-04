const axios = require('axios')


const instance = axios.create({
    baseURL: 'https://api.worldtradingdata.com'
})


module.exports = instance
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);


class NewsController {
    static getTopHeadlines(req, res, next) {
        const { q, language, country, category } = req.query
        let objParams = { sortBy: 'popularity' }

        if (q) objParams.q = q
        if (language) objParams.language = language
        if (country) objParams.country = country
        if (category) objParams.category = category

        newsapi.v2.topHeadlines(objParams)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(next)
    }

    static getLatestNews(req, res, next) {
        // q is required here
        const { q, country, category } = req.query
        let objParams = { sortBy: 'publishedAt', language: 'en' }
        if (q) {objParams.q = q} else { objParams.q = 'general'}

        if (country) objParams.country = country
        if (category) objParams.category = category

        newsapi.v2.everything(objParams)
            .then(response => {
                res.status(200).json(response)
            })
            .catch(next)
    }

}

module.exports = NewsController
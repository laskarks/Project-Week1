$(document).ready(() => {

})

function getTopHeadlines() {
    $('#top-headlines').empty()
    $.ajax({
            method: 'GET',
            url: ``
        })
        .done((top_headlines) => {
            console.log(top_headlines[0])
            for (let i = 0; i < top_headlines.length; i++) {
                $('#headlines').append(``)
            }
        })
        .fail(err => {
            console.log(err)
        })
}

function searchNews() {
    $('#news').empty()
    const news = $('#news').val()
    $.ajax({
            method: 'GET',
            url: ``
        })
        .done((searched_news) => {
            for (let i = 0; i < searched_news.items.length; i++) {
                $('#news').append(``)
            }
        })
        .fail(err => {
            console.log(err)
        })
}

function getMarket() {
    $.ajax({
            method: 'GET',
            url: ``
        })
        .done((market) => {
            const stocks = market.majorIndexesList
            for (let i = 0; i < stocks.length; i++) {
                $('#market').append(`
                <tr>
                    <td> ${stocks[i].ticker}</td>
                    <td> ${stocks[i].changes}</td>
                    <td> ${stocks[i].price}</td>
                    <td> ${stocks[i].indexname}</td>
                </tr>
                `)
            }
        })
        .fail(err => {
            console.log(err)
        })
}
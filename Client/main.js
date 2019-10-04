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
        console.log(market[0])
        for (let i = 0; i < market.length; i++) {
            $('#market').append(``)
        }
    })
    .fail(err => {
        console.log(err)
    })
}

function getCurrency() {
    $.ajax({
        method: 'GET',
        url: ``
    })
    .done((currency) => {
        console.log(currency[0])
        for (let i = 0; i < currency.length; i++) {
            $('#currency').append(``)
        }
    })
    .fail(err => {
        console.log(err)
    })
}





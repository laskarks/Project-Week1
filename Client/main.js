$(document).ready(() => {
    getLatest()
    $('#forex').hide()

})

const config = {
    host: 'http://localhost:3000'
}

function getLatest() {
    $('#latest').empty()
    const value = $('#q').val()
    $.ajax({
        method: 'GET',
        url: `${config.host}/news/latest?q=${value}`
  
    })
    .done((latest) => {
        console.log(latest.articles[0])
        for (let i = 0; i < latest.articles.length; i++) {
            let article = latest.articles[i]
            $('#headlines').append(`
            <div class="card" style="width: 27rem;">
                <img src="${article.urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>`)
        }
    })
    .fail(err => {
        console.log(err)
    })

}

function getTopHeadlines() {
    $('#headlines').empty()
    const value = $('#q').val()
    $.ajax({
        method: 'GET',
        url: `${config.host}/news/top?q=${value}`
  
    })
    .done((top_headlines) => {
        console.log(top_headlines.articles[0])
        for (let i = 0; i < top_headlines.articles.length; i++) {
            let article = top_headlines.articles[i]
            $('#headlines').append(`
            <div class="card" style="width: 27rem;">
                <img src="${article.urlToImage}" class="card-img-top" alt="...">

                <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description}</p>
                <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>`)
        }
    })
    .fail(err => {
        console.log(err)
    })
}

function getForex() {
    const value = $('#currency').val()

    $.ajax({
        method: 'GET',
        url: `${config.host}/forex?base=${value}`
    })
    .done((forex) => {
        // console.log(forex)
        $('#forex').show()
        for(let key in forex){
            // console.log(key, forex[key])
            $('#forex_data').append(`
            <tr>
                <th>${key}</th>
                <th>${forex[key]}</th>
            </tr>
          
         `)
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





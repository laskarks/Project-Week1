$(document).ready(() => {
    getLatest()
    getForexHome()
    $('#mainPage').hide()
    $('#signout').hide()
    getMarket()
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
                <a href="${article.url}" target="_blank" class="card-title"><h5>${article.title}</h5></a>
                    <p class="card-text">${article.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${ new Date(article.publishedAt).toDateString()}</li>
                </ul>
                <div class="card-body">
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div> <br>`)
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
        // console.log(top_headlines.articles[0])
        for (let i = 0; i < top_headlines.articles.length; i++) {
            let article = top_headlines.articles[i]
            $('#headlines').append(`
           
            <div class="card" style="width: 27rem;">
                <img src="${article.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <a href="${article.url}" target="_blank" class="card-title"><h5>${article.title}</h5></a>
                    <p class="card-text">${article.description}</p>
                    <p class="card-text">${article.description}</p>

                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${ new Date(article.publishedAt).toISOString()}</li>
                </ul>
                <div class="card-body">
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>`)
        }
    })
    .fail(err => {
        console.log(err)
    })
}

function getForexHome() {
    $.ajax({
        method: 'GET',
        url: `${config.host}/forex?base=USD`
    })
    .done((forex) => {
        $('#forex').hide()
        for(let key in forex){
            // console.log(key, forex[key])
            $('#forexHome_data').append(`
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

function getForex() {
    $('#forexHome').empty()
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

function onSignIn(googleUser) {
    const config = {
      host: 'http://localhost:3000'
    }
    const googleToken = googleUser.getAuthResponse().id_token;

    $.ajax({
      method: 'POST', 
      url: `${config.host}/users/gsignin`,
      data: {
        id_token: googleToken
      }
    })
    .done(token => {
      $('#mainPage').show()
      $('#signout').show()
      $('#gsignin').hide()
      localStorage.setItem('token', token)
    })
    .fail(err => {
      console.log(err)
    })
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $('#mainPage').hide()
        $('#gsignin').show()
        $('#signout').hide()
        localStorage.removeItem('token')
        console.log('User signed out.');
    });
  }

  

function getMarket() {
    $.ajax({
        method: 'GET',
        url: `${config.host}/stocks`
    })
        .done((market) => {
        
            const stocks = market.majorIndexesList
            // console.log(stocks[0])
            for (let i = 0; i < stocks.length; i++) {
                $('#market').append(`
                <tr>
                    <td> ${stocks[i].ticker}</td>
                    <td> ${stocks[i].changes}</td>
                    <td> ${stocks[i].price}</td>
                </tr>
                `)
            }
        })
        .fail(err => {
            console.log(err)
        })
}






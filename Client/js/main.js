function login() {
    event.preventDefault()
    const username = $('#username').val()
    const password = $('#password').val()
    
    $.ajax({
            url: 'http://localhost:3001/users/signIn',
            method: 'POST',
            data: { username, password }
        })
        .done(response => {
            alert('Yeay, New Repo Created')
            
        })
        .fail((jqXHR, textstatus) => {
            console.log('fail', textstatus)
        })
        
}
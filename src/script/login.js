var button = document.querySelector('#login-button');

button.addEventListener('click', function() {
    var email = document.querySelector('#login')
    var pass = document.querySelector('#password')
    if (email.checkValidity() && pass.checkValidity()) {
        event.preventDefault();
        window.location.href = '../../index.html';
    }
})
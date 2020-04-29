var button = document.querySelector('#submit-contact');

button.addEventListener('click', function() {
    var email = document.querySelector('#contact-email')
    var name = document.querySelector('#contact-name')
    var message = document.querySelector('#contact-comment')
    if (email.checkValidity() && name.checkValidity() && message.checkValidity()) {
        document.querySelector('#contact-modal').modal('hide');
    }
})


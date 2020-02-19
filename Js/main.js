document.addEventListener("DOMContentLoaded", () => {

const click = document.getElementById('input-subscribe-button');

click.addEventListener('click', valEmail);

// Validating email 

function valEmail(email){
    event.preventDefault();
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ) {
        alert('Thanks for subscribing');
    }else
    alert(' A valid Email is required');
}

});









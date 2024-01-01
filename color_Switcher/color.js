const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'grey') {
            body.style.backgroundColor = '#808080';
        }
        if (e.target.id === 'black') {
            body.style.backgroundColor = '#212121';
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = '#3498db';
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = '#f1c40f';
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = '#9b59b6';
        }
    });
});

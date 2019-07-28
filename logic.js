const button = document.querySelector('input');
const paragraph = document.querySelector('p');

document.onload=function(){
    button.addEventListener('click', updateButton);
}
function updateButton() {
    if (button.value === 'C') {
        button.value = 'CE';
        paragraph.textContent = 'The machine has started!';
    } else {
        button.value = 'C';
        paragraph.textContent = 'The machine has stopped.';
    }
}

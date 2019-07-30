const button = document.querySelector('input');
const paragraph = document.querySelector('p');

document.onload=function(){
    button.addEventListener('click', updateButton);
}
function updateButton() {
    if (button.value === 'C') {
        button.value = 'CE';
        console.log("C is Pressed");
    } else {
        button.value = 'C';
        console.log("CE is Pressed");
    }
}

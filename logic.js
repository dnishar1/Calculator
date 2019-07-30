const button = document.getElementById('clear-button');

window.onload = function(){
    button.addEventListener('click', updateButton);
}
function updateButton() {
    if (button.value === 'C') {
      button.value = 'CE';
    } else {
      button.value = 'C';
    }
  }

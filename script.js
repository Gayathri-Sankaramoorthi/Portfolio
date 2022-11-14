var menuList = document.getElementById('nav-links');
function menu(x) {
  if( x.classList.toggle("cross")) {
    menuList.style.opacity='1';
    menuList.style.transitionDuration='0.3s';
  }
 else {
  menuList.style.opacity='0';
  menuList.style.transitionDuration='0.3s';
 }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwRHBl5xPvX5QI8DFd_d1_1Ro92JCJ0dWYEU4KPE48kv_wn-rP59JaYqGu_71V49CPi/exec'
const form = document.forms['submit-to-google-sheet'];
const sent = document.getElementById("sent");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        sent.innerHTML="Message sent successfully!"
        setTimeout(function() {
            sent.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
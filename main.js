
// main.js
function toggleMenu(){
  const links = document.querySelector('.nav-links');
  links.classList.toggle('show');
}
function submitForm(e){
  e.preventDefault();
  alert('Thanks! This is a demo form. To enable real submissions, add a server-side endpoint.');
  document.getElementById('contact-form').reset();
}

hamburger = document.querySelector('.material-symbols-outlined');
      hamburger.onclick = function(){
        navBar = document.querySelector(".nav");
        navBar.classList.toggle("active");
}
const form = document.getElementById('contact');

// form.addEventListener('submit', function handleSubmit(event) {
//   // event.preventDefault();

//   // 👇️ Send data to the server here
//   // 👇️ Reset the form here
//   form.reset();
// });

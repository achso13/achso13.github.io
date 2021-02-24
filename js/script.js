const burgerMenu = document.querySelector(".burger-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", ()=>{
    sidebar.classList.add("slide");
    overlay.classList.add("d-block");
});

overlay.addEventListener("click", ()=>{
    sidebar.classList.remove("slide");
    overlay.classList.remove("d-block");
});

var options = {
    strings: ['a Web Developer.', 'an IT Student.'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  };
  
  var typed = new Typed('#typed', options);

$(document).ready(function () {
    // Show Modal
    $(".btnModalContact").click(() => {
        $(".overlayContact").toggleClass("hidden");
        $(".modalContact").fadeIn(300).toggleClass("hidden");
    });
    $(".btnCloseModalContact").click(() => {
        $(".overlayContact").toggleClass("hidden");
        $(".modalContact").fadeOut(300).toggleClass("hidden");
    });
    $(".overlayContact").click(() => {
        $(".overlayContact").toggleClass("hidden");
        $(".modalContact").fadeOut(300).toggleClass("hidden");
    });

    // Responsive navbar
    const burgerMenu = document.querySelector("#burger-menu");
    const navbarHiddenMenu = document.querySelector("#navbar-hidden-menu");
    const closeButton = document.querySelector("#close-button");

    burgerMenu.addEventListener("click", () => {
        navbarHiddenMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", () => {
        navbarHiddenMenu.classList.toggle("hidden");
    });

    function checkFloatingDiv() {
        var section1 = document.querySelector('#main');
        var position1 = section1.getBoundingClientRect();
      
        //Checking whether the specified sections are visible
        //If any of them is visible, then show the float content. Else, hide it.
        if (position1.bottom >= 500) {
          //Show the floating element
          document.querySelector('#backtotop').style.display = "none";
          return;
        } else {
            document.querySelector('#backtotop').style.display = "flex";
          
        }
      }
      
      // Run the function on scroll
      window.addEventListener("scroll", checkFloatingDiv);
      // Run the function on load, if any elements are already visible without scrolling
      window.addEventListener("load", checkFloatingDiv);
});

let options = {
    strings: ['ACHMAD', 'A FULLSTACK DEVELOPER'],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true
};

let typed = new Typed('#typed', options);

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

    // Scroll Animation
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }
        });
    });

    // Slider
    // get the slider
    var theSlider = document.querySelector(".slider-all-items");
    // get the items in the slider
    var sliderItem = document.querySelectorAll('.slider-item');

    // variables saved for later
    var sliderWidth;
    var sliderRight;

    // run the function
    dragElement(theSlider);

    function dragElement(theSlider) {
        var pos1 = 0, pos3 = 0;
        theSlider.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos3 = e.clientX;

            // set the element's new position:
            theSlider.style.left = (theSlider.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // add the class .shifting to the slider for every css change (transition)
            theSlider.classList.add("shifting");

            // get each item width
            sliderWidth = theSlider.getBoundingClientRect().width / sliderItem.length;
            sliderFullWidth = theSlider.getBoundingClientRect().width;
            // get the right side position of the slider
            sliderRight = theSlider.getBoundingClientRect().right;
            // get the left side position of the slider
            sliderLeft = theSlider.getBoundingClientRect().left;

            if (sliderLeft >= 0) {
                theSlider.style.left = "0px";
            }

            if (sliderRight <= sliderWidth) {
                theSlider.style.left = -Math.abs((sliderWidth * sliderItem.length) - sliderWidth) + "px";
            }

            // delay 0.5s, then remove the class .shifting when finished checking and styling
            // .shifting {transition: all 0.5s ease;}
            setTimeout(() => {
                theSlider.classList.remove("shifting");
            }, 500);

            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Animate CTA
    $(".slideFast").hide(0).delay(500).slideToggle(1500);
    $(".slideSlow").hide(0).delay(500).slideToggle(2500);

});

let options = {
    strings: ['ACHMAD', 'A STUDENT', 'A FRONTEND WEB DEVELOPER'],
    typeSpeed: 30,
    backSpeed: 30,
    loop: true
};

let typed = new Typed('#typed', options);

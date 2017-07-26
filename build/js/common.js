//Top menu
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var topMenu = document.querySelector(".cont-top-menu");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    topMenu.classList.toggle("top-menu-visible");
    // Do something else, like open/close menu
});
//Top menu end
//Slider
$(document).ready(function(){
    $(".carousel").carousel({
        interval: 4000
    });

});
//Slider End

$("#asortyment-carousel").owlCarousel({
    center: false,
    margin: 30,
    items: 4,
    loop:true,
    navText: [" "],
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            nav: false,
            items: 2
        },
        900:{
            margin: 10,
            nav: false,
            items: 3,
            center: false
        },
        1080:{
            items: 4
        }

    }

});
document.querySelector(".bars__menu").addEventListener("click", animateBars);

document.querySelector("#btn-menu1").addEventListener("click", animateBars);
document.querySelector("#btn-menu2").addEventListener("click", animateBars);
document.querySelector("#btn-menu3").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".nav-menu")

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("menu__active")
}

$(document).ready(function() {
    $("#hamburger").click(function() {
        if($('#menu').hasClass('visible')) {
            $("#menu").removeClass("visible");
        } else {
            $("#menu").addClass("visible");
        }
    });
});

$(document).ready(function() {
    $("#btn-menu1").click(function() {
        if($('#menu').hasClass('visible')) {
            $("#menu").removeClass("visible");
        } else {
            $("#menu").addClass("visible");
        }
    });
});
$(document).ready(function() {
    $("#btn-menu2").click(function() {
        if($('#menu').hasClass('visible')) {
            $("#menu").removeClass("visible");
        } else {
            $("#menu").addClass("visible");
        }
    });
});
$(document).ready(function() {
    $("#btn-menu3").click(function() {
        if($('#menu').hasClass('visible')) {
            $("#menu").removeClass("visible");
        } else {
            $("#menu").addClass("visible");
        }
    });
});

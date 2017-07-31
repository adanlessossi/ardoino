"use strict";
! function() {
    var n = $("html"),
        t = function() { $(".btn-menu").on("click", function(t) { t.preventDefault(), n.toggleClass("menu-opened") }) },
        e = function() { t() };
    e()
}();

function getCalendar() {

    window.location.href = "./ride.html";
}
document.getElementById("anmelden").onclick = getCalendar;
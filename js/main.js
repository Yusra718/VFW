// Yusra Ahmed
// Project 2: Web App Part 2
// VFW Term 1210

window.addEventListener("DOMContentLoaded", function() {

    function getId(id) {
        var element = document.getElementById(id)
        return element
    };
    
    var tu = getId("turkey"),
        tusl = getId("turkeyslices"),
        ch = getId("chicken"),
        chsl = getId("chickenslices"),
        pa = getId("pastrami"),
        pasl = getId("pastramislices"),
        bb = getId("beefbacon"),
        bbsl = getId("beefbaconslices"),
        nm = getId("nomeat"),
        nc = getId("nocheese"),
        tm = getId("tomatoes"),
        tmsl = getId("tomatoslices"),
        pi = getId("pickles"),
        pisl = getId("pickleslices"),
        on = getId("onions"),
        onsl = getId("onionslices"),
        no = getId("no")
        
    ;

    function tuslRange() {
        if (tu.checked) {
            tusl.removeAttribute("disabled", "disabled")
        } else {
            tusl.setAttribute("disabled", "disabled")
        }
    };
    
    function chslRange() {
        if (ch.checked) {
            chsl.removeAttribute("disabled", "disabled")
        } else {
            chsl.setAttribute("disabled", "disabled")
        }
    };
    
    function paslRange() {
        if (pa.checked) {
            pasl.removeAttribute("disabled", "disabled")
        } else {
            pasl.setAttribute("disabled", "disabled")
        }
    };
    
    function bbslRange() {
        if (bb.checked) {
            bbsl.removeAttribute("disabled", "disabled")
        } else {
            bbsl.setAttribute("disabled", "disabled")
        }
    };
    
    function noMeat() {
        if (nm.checked) {
            tu.setAttribute("disabled", "disabled"),
            tusl.setAttribute("disabled", "disabled"),
            ch.setAttribute("disabled", "disabled"),
            chsl.setAttribute("disabled", "disabled"),
            pa.setAttribute("disabled", "disabled"),
            pasl.setAttribute("disabled", "disabled"),
            bb.setAttribute("disabled", "disabled"),
            bbsl.setAttribute("disabled", "disabled")
        } else {
            tu.removeAttribute("disabled", "disabled"),
            ch.removeAttribute("disabled", "disabled"),
            pa.removeAttribute("disabled", "disabled"),
            bb.removeAttribute("disabled", "disabled")
        }
    };
    
    function tmslRange() {
        if (tm.checked) {
            tmsl.removeAttribute("disabled", "disabled")
        } else {
            tmsl.setAttribute("disabled", "disabled")
        }
    };
    
    tu.addEventListener("click", tuslRange)
    ch.addEventListener("click", chslRange)
    pa.addEventListener("click", paslRange)
    bb.addEventListener("click", bbslRange)
    nm.addEventListener("click", noMeat)
    tm.addEventListener("click", tmslRange)

});
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
        le = getId("lettuce")
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
    
    function pislRange() {
        if (pi.checked) {
            pisl.removeAttribute("disabled", "disabled")
        } else {
            pisl.setAttribute("disabled", "disabled")
        }
    };
    
    function onslRange() {
        if (on.checked) {
            onsl.removeAttribute("disabled", "disabled")
        } else {
            onsl.setAttribute("disabled", "disabled")
        }
    };
    
    function nothing() {
        if (no.checked) {
            tm.setAttribute("disabled", "disabled"),
            tmsl.setAttribute("disabled", "disabled"),
            pi.setAttribute("disabled", "disabled"),
            pisl.setAttribute("disabled", "disabled"),
            on.setAttribute("disabled", "disabled"),
            onsl.setAttribute("disabled", "disabled"),
            le.setAttribute("disabled", "disabled")
        } else {
            tm.removeAttribute("disabled", "disabled"),
            pi.removeAttribute("disabled", "disabled"),
            on.removeAttribute("disabled", "disabled"),
            le.removeAttribute("disabled", "disabled")
        }
    };
    
    tu.addEventListener("click", tuslRange)
    ch.addEventListener("click", chslRange)
    pa.addEventListener("click", paslRange)
    bb.addEventListener("click", bbslRange)
    nm.addEventListener("click", noMeat)
    tm.addEventListener("click", tmslRange)
    pi.addEventListener("click", pislRange)
    on.addEventListener("click", onslRange)
    no.addEventListener("click", nothing)

});
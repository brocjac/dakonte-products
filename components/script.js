const menu = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
hamburger.addEventListener("click", toggleMenu);
$(function(){
    $("a.counter").click(function()
    {
        return false; // prevent default browser refresh on "#" link
    });
});
function show_hide_1() {
    function getElementsByClasses(className) {
        let obj = {};
        className.forEach(function (className) {
            obj[className] = Array.from(document.getElementsByClassName(className));
        });
        return obj;
    }
    let elements = getElementsByClasses(['list-1', 'list-2', 'list-link-1', 'list-link-2']);
    if (elements['list-1'].every(el => window.getComputedStyle(el).display === "none") &&
        elements['list-2'].every(el => window.getComputedStyle(el).display === "none")) {
        elements['list-link-1'].forEach(el => el.classList.add('selected'));
        elements['list-1'].forEach(el => el.style.display = "block");
    } else if (elements['list-2'].every(el => window.getComputedStyle(el).display === "block")) {
        elements['list-link-1'].forEach(el => el.classList.add('selected'));
        elements['list-link-2'].forEach(el => el.classList.remove('selected'));
        elements['list-2'].forEach(el => el.style.display = "none");
        elements['list-1'].forEach(el => el.style.display = "block");
    } else {
        elements['list-link-1'].forEach(el => el.classList.remove('selected'));
        elements['list-1'].forEach(el => el.style.display = "none");
    }
}
function show_hide_2() {
    function getElementsByClasses(className) {
        let obj = {};
        className.forEach(function (className) {
            obj[className] = Array.from(document.getElementsByClassName(className));
        });
        return obj;
    }
    let elements = getElementsByClasses(['list-1', 'list-2', 'list-link-2', 'list-link-1']);
    if (elements['list-2'].every(el => window.getComputedStyle(el).display === "none") &&
        elements['list-1'].every(el => window.getComputedStyle(el).display === "none")) {
        elements['list-link-2'].forEach(el => el.classList.add('selected'));
        elements['list-2'].forEach(el => el.style.display = "block");
    } else if (elements['list-1'].every(el => window.getComputedStyle(el).display === "block")) {
        elements['list-link-2'].forEach(el => el.classList.add('selected'));
        elements['list-link-1'].forEach(el => el.classList.remove('selected'));
        elements['list-1'].forEach(el => el.style.display = "none");
        elements['list-2'].forEach(el => el.style.display = "block");
    } else {
        elements['list-link-2'].forEach(el => el.classList.remove('selected'));
        elements['list-2'].forEach(el => el.style.display = "none");
    }
}

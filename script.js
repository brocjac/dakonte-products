const menu = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
    const click1 = Array.from(document.getElementsByClassName("list-1"));
    Array.prototype.globalForEach = function(callback) {
        this.forEach(callback);
    };
    click1.globalForEach((element) => {
        const click = document.getElementsByClassName("list-2");
        Array.from(click).forEach((click2) => {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
                element.style.display = "none";
                click2. style.display = "none";
                closeIcon.style.display = "none";
                menuIcon.style.display = "block";
            } else {
                menu.classList.add("showMenu");
                closeIcon.style.display = "block";
                menuIcon.style.display = "none";
            }
        })
    })
}
hamburger.addEventListener("click", toggleMenu);
$(function(){
    $("a.counter").click(function()
    {
        return false; // prevent default browser refresh on "#" link
    });
});
// function show_hide_1() {
//     const clickHide = Array.from(document.getElementsByClassName("list-2"));
//     Array.prototype.globalForEach = function(callback) {
//         this.forEach(callback);
//     };
//     clickHide.globalForEach((element) => {
//         const click = document.getElementsByClassName("list-1");
//         Array.from(click).forEach((x) => {
//             if (x.style.display === "none" && element.style.display==="none") {
//                 x.style.display = "block";
//             } else if (element.style.display === "block") {
//                 element.style.display = "none"
//                 x.style.display = "block";
//             } else {
//                 x.style.display = "none";
//             }
//         });
//     });
// }
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

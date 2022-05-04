
function Nav_fun() {
    // 
    // 
    if (document.getElementById("nav-items").style.transform === "translateX(0%)") {

        document.getElementById("nav-items").style.transform = "translateX(100%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-left fa-2x";
        document.querySelector("body").style.overflow = "hidden" ;
    }
    // 
    // 
    else{

        document.getElementById("nav-items").style.transform = "translateX(0%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-right fa-2x";
        document.querySelector("body").style.overflow = "hidden" ;
    }

}
// 
// 
// var IsNavOpened = Boolean(false);
// function navbar() {
//     if (IsNavOpened) {
//         alert(true);
//     }
//     else{
//         alert(false);
//     }
//     IsNavOpened = !IsNavOpened
// }


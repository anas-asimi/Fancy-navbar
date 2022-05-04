
function Nav_fun() {
    // 
    // 
    if (document.getElementById("nav-items").style.transform === "translateX(0%)") {

        document.getElementById("nav-items").style.transform = "translateX(100%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-left fa-2x";
    }
    // 
    // 
    else{

        document.getElementById("nav-items").style.transform = "translateX(0%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-right fa-2x";
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


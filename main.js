function Nav_fun() {
    var IsNavOpened = document.getElementById("nav-items").style.transform === "translateX(0%)"
    // 
    if (IsNavOpened) {

        document.getElementById("nav-items").style.transform = "translateX(100%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-left fa-2x";
    } 
    else{
        document.getElementById("nav-items").style.transform = "translateX(0%)" ;
        document.getElementById("menu-btn").className = "fa-solid fa-angles-right fa-2x";
    }
}

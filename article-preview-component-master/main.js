

let footerContent = document.getElementById("footer-content");
let toolTipMobile =  document.getElementById("tooltip-mobile");
let toolTipDesktop = document.getElementById("tooltip-desktop");
let iconShare =  document.getElementById("icon-share");
let cardFooter = document.getElementById("card-footer");


iconShare.addEventListener("click",showHideShareIcons);

function showHideShareIcons(){

    var mediaQuery = window.matchMedia("(max-width: 799px)");
    
    if (mediaQuery.matches)
    {
        toolTipMobile.classList.toggle("tooltip-mobile-show");
        footerContent.classList.toggle("hidden");
        cardFooter.classList.toggle("card-footer-hide");
        iconShare.classList.toggle("icon-share-tooltip");
    }
    
    toolTipDesktop.classList.toggle("tooltip-desktop-show")
}

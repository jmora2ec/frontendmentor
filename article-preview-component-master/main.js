let footerContent = document.getElementById("footer-content");
let toolTip =  document.getElementById("tool-tip");
let iconShare =  document.getElementById("icon-share");
let cardFooter = document.getElementById("card-footer")

iconShare.addEventListener("click",showHideShareIcons)

function showHideShareIcons(){
    toolTip.classList.toggle("hidden");
    footerContent.classList.toggle("hidden");
    cardFooter.classList.toggle("padh-0");
    cardFooter.classList.toggle("card-footer-tooltip");
    iconShare.classList.toggle("icon-share-tooltip");
}
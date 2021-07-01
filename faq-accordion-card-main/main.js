function toggle_collapsible(){
    this.classList.toggle("collapsible-expanded")
}

const collapsibles=document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
{
    item.addEventListener("click",toggle_collapsible);

});



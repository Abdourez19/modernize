function add_Shadow(element){
    element.classList.add("shadowing");
}

function hideShadow(element){
    element.classList.remove("shadowing")
}

function over(element){
    element.classList.add("block")
    alert("mouseover")
}
function out(element){
    element.classList.remove("block")
    alert("mouseout")
}
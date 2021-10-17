
const dropShape = (event)=>{
    let shape = event.target;
    let drag_over_containers = document.getElementsByClassName("dragged-over");
    if(drag_over_containers.length !== 0){
        drag_over_containers[0].appendChild(shape);
        drag_over_containers[0].classList.remove("dragged-over");
    }

}

const highlightContainer = (event)=>{
    event.preventDefault();
    let shape = document.getElementsByClassName("dragged")[0];
    let drag_over_container = document.getElementById("drag-over-container");
    drag_over_container.classList.add("dragged-over");
}


const removeHighlight= ()=>{
    let shape = document.getElementsByClassName("dragged")[0];
    let drag_over_container = document.getElementById("drag-over-container");
    drag_over_container.classList.remove("dragged-over");

}


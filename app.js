const inputs=document.getElementById("input");
const listitem=document.getElementById("list-container");
const clearListBtn = document.getElementById('clearList');
function addTask() {
    if(inputs.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputs.value;
        listitem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputs.value='';
}

listitem.addEventListener("click",function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("check");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    
},false);




clearListBtn.addEventListener('click', () => {
  // Remove all child elements of the todoList ul element
  while (listitem.hasChildNodes()) {
    listitem.removeChild(listitem.firstChild);
  }
});

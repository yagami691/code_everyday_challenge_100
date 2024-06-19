const eventKey = document.getElementById("event-key");
const eventKeyCode = document.getElementById("event-keyCode");
const eventCode= document.getElementById("event-code");
const pressKey= document.getElementById("press-key");
const row= document.querySelector(".row");


window.addEventListener("keydown",(event)=>{
    pressKey.style.display = "none";
    row.style.display = "inline-block"
    eventKey.innerHTML = `${event.key}`
    eventKeyCode.innerHTML = `${event.keyCode}`
    eventCode.innerHTML = `${event.code}`
    
})
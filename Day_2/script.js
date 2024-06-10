const prev = document.getElementById("prev")
const next = document.getElementById("next")
const bars = document.querySelectorAll(".bar")

bars.forEach((step, index)=>{
     next.addEventListener("click", ()=>{
        step.classList.add("change");
     })
})



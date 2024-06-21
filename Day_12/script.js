const chevronDown = document.querySelector(".fa-chevron-down");
const alignBorder = document.querySelector(".align-border")
const xmark = document.querySelector(".fa-xmark");
const change = document.querySelector(".change");

chevronDown.addEventListener("click",()=>{
    chevronDown.style.display="none";
    xmark.style.display="inline-block";
    alignBorder.style.height = "200px";
    change.style.display = "inline-block";
   
})

xmark.addEventListener("click",()=>{
    xmark.style.display="none";
    chevronDown.style.display ="inline-block";
    alignBorder.style.height = "60px";
    change.style.display = "none";
})
const navbar = document.querySelector(".navbar");
const xmark = document.querySelector(".fa-xmark");
const bar = document.querySelector(".fa-bars");
const elements = document.querySelectorAll(".elem");

xmark.addEventListener("click", ()=>{
     navbar.classList.add("change")

     elements.forEach(elem =>{
        elem.style.opacity = 0;
        elem.style.transition = "opacity 1s ease"
        
     })
     
})

bar.addEventListener("click", ()=>{
    navbar.classList.remove("change")

    elements.forEach(elem =>{
       elem.style.opacity = 1;
       elem.style.transition = "";
       
    })
    
})
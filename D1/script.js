const images = document.querySelectorAll(".images");

images.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.style.transition = "width 2s"
        item.style.width="750px";
    });
   
})


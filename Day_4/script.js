const search = document.getElementById("search");
const input = document.getElementById("input");
const icone = document.querySelector(".fa-solid");




icone.addEventListener("click",()=>{
    input.style.width="300px";
    input.placeholder ="Search..."
    input.focus();
    
})
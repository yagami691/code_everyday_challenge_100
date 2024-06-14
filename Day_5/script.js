const loadingContainer = document.getElementById("loading-container");
const loadingPercent = document.getElementById("loading-percent");

let load = 0;

const loading = setInterval(blurred, 30);


const blurred = ()=>{
 load++;
 if(load>99){
    clearInterval(loading);
    console.log(load)
 }
}
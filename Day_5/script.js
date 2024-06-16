const loadingContainer = document.querySelector(".loader-container");
const loadingPercent = document.querySelector(".loading-percent");

let load = 0;
let loading = setInterval(blurred, 30);

function blurred(){
    load++;
    if(load>99){
       clearInterval(loading);
    }
   loadingPercent.innerText = `${load}%`
   loadingPercent.style.opacity = scale(load, 0, 100, 1, 0)
   loadingContainer.style.filter = `blur(${scale(load, 0, 100, 30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


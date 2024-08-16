const  slider = document.querySelector('.slider');
let currentSlider = 0;
let totalSlides= slider.querySelectorAll('.wrapper  .left > div').length -1;

slider.querySelector('.controls .up').addEventListener('click',function(){
    if(currentSlider ==0){
        return;
    }

    currentSlider--;
    slider.querySelector('.wrapper .left div').style.marginTop = `${currentSlider*-100}vh`;
    slider.querySelector('.wrapper .right div').style.marginTop = `${(totalSlides-currentSlider)*-100}vh`;
})


slider.querySelector('.controls .down').addEventListener('click',function(){
    if(currentSlider ==totalSlides){
        return;
    }

    currentSlider++;
    slider.querySelector('.wrapper .left div').style.marginTop = `${currentSlider*-100}vh`;
    slider.querySelector('.wrapper .right div').style.marginTop = `${(totalSlides-currentSlider)*-100}vh`;
})

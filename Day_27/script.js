const showNotification = document.querySelector('.show-notification');
const rightPosition = document.getElementById('right-position');
let i=0;
 const tabColor = ['#4753a2','#5e6850','#604958','#93b44c','#a054a2','#4b2e18'];
 


showNotification.addEventListener('click',()=>{
    let randomNumber = Math.floor(Math.random()*(tabColor.length - 1));
    let lists = document.createElement('li');
    lists.className ='listed-items';
    lists.innerHTML = `Message ${i++}`;
    lists.style.color = tabColor[randomNumber];
    rightPosition.appendChild(lists);
    setTimeout(()=>{
          lists.style.display = 'none';
    },1200)

})
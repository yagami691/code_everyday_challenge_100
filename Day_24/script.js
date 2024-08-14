const header =document.getElementById('header');
const title =document.getElementById('title');
const excerpt =document.getElementById('excerpt');
const profile_img =document.getElementById('profile_bg');
const name =document.getElementById('name');
const date =document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData,2500);

function getData(){
      header.innerHTML= `<img src='images/pc.jpg'/>`
      title.innerHTML= "lorem ipsum dolor sit amet"
      excerpt.innerHTML = "lorem ipsum dolor sit amet consectetur adipisicing elit. "
      profile_img.innerHTML = `<img src='images/profilePhoto.jpg' class="profile-img animated-bg"/>`
      name.innerHTML = 'Kali Mansah '
      date.innerHTML = 'Nov 07 2024'


      animated_bgs.forEach(bg=>bg.classList.remove('animated-bg'));
      animated_bg_text.forEach(bg=>bg.classList.remove('animated-bg-text'))
}
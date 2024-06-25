const digits = document.querySelectorAll(".digits")


window.addEventListener("DOMContentLoaded",()=>{
   digits.forEach(digit=>{
    digit.innerHTML="0";

   const updateNumberfollowers = ()=>{
      const numberFollowers= parseInt(digit.getAttribute("number-followers"))
      const counter = parseInt(digit.innerHTML)
      const  increment =numberFollowers/20;
      console.log(counter, increment)
       
      if(counter<numberFollowers){
        digit.innerHTML = `${counter + increment}`
        setTimeout(updateNumberfollowers,40);
      }
   }

       updateNumberfollowers();
   })
   
})





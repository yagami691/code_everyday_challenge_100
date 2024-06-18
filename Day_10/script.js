const anotherJoke = document.getElementById("another-joke");
const Joke = document.getElementById("jokes");
const listJokes = [];


anotherJoke.addEventListener("click",getJoke)

getJoke();

async function getJoke(){
  try{
    const res= await fetch("https://icanhazdadjoke.com/",{
        headers: {
            'Accept': 'application/json'
          }
    })
    const retrieveJoke= await res.json();
    const {joke}=retrieveJoke;
    Joke.innerHTML =joke;
  }
  catch(err){
    console.log(err);
  }
}






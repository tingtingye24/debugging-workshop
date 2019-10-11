document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
 

 
  let joke;

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(function(jokeData){
      const username = document.getElementById('name-input').value
      joke = jokeData.joke
      if(username === "") return; 
      const newJokeLi = document.createElement('li');
      newJokeLi.innerHTML = `
      <span class="username">${username} says:</span> ${joke}
      `
      jokeList.appendChild(newJokeLi);
    })
  }

  form.addEventListener('submit', (event) => {

    event.preventDefault();

    fetchJoke()
    
  })
})

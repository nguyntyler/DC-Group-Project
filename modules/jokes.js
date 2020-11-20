// Joke creation functions, creates text and placeholder

export function getJoke() {
  let newJokeDiv = document.createElement("div");
  newJokeDiv.id = "newJokeDiv";

  let joke = document.createElement("div");
  joke.id = "joke";

  let jokeText = document.createElement("p");
  jokeText.id = "jokeText";
  joke.append(jokeText);

  let jokeContainer = document.querySelector("#joke-container");
  jokeContainer.append(newJokeDiv);
  newJokeDiv.append(joke);

  // api data pull for joke content

  let newJoke = document.querySelector("#jokeText");
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((obj) => (newJoke.innerText = obj.joke));
}

//removes joke text

export function removeJoke() {
  let joke = document.querySelector("#joke");
  joke.remove();
}

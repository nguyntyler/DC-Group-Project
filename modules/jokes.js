export function getJoke() {
  let newJokeDiv = document.createElement("div");
  newJokeDiv.id = "newJokeDiv";

  // Create joke
  let joke = document.createElement("div");
  joke.id = "joke";

  // Create jokeText
  let jokeText = document.createElement("p");
  jokeText.id = "jokeText";
  joke.append(jokeText);

  let jokeContainer = document.querySelector("#joke-container");
  jokeContainer.append(newJokeDiv);
  newJokeDiv.append(joke);

  // Create jokeText
  let newJoke = document.querySelector("#jokeText");
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((data) => data.json())
    .then((obj) => (newJoke.innerText = obj.joke)); // Replace jokeText with the queryselector of your choosing.
  // Function. If sentence includes question mark or period, add 2 new lines.
}

export function removeJoke() {
  let joke = document.querySelector("#joke");
  joke.remove();
}


export function getJoke() {
    // Create joke
    let joke = document.createElement("div");
    joke.id = "joke"

    // Create jokeText
    let jokeText = document.createElement("p")
    jokeText.id = "jokeText"
    joke.append(jokeText)

    // Create jokeText
    let newJoke = document.querySelector("#jokeText")
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(data => data.json())
        .then(obj => newJoke.innerText = obj.joke) // Replace jokeText with the queryselector of your choosing.
    // Function. If sentence includes question mark or period, add 2 new lines.



}

export function createJokeBox() {
    // Create joke
    let joke = document.createElement("div");
    joke.id = "joke"

    // Create jokeText
    let jokeText = document.createElement("p")
    jokeText.id = "jokeText"
    joke.append(jokeText)

    let jokeContainer = document.querySelector("#joke-container")
    jokeContainer.append(joke)
}
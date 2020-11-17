import { addAvatar, removeAvatar } from "./modules/avatar.js";
import { getJoke, createJokeBox } from "./modules/jokes.js";

let button = document.querySelector("#button");
button.addEventListener("click", () => {
    addAvatar();
    createJokeBox();
    setTimeout(getJoke, 50);
    // ASYNC DEFER
});

let removeUp = document.querySelector("#up");
removeUp.addEventListener("click", removeAvatar);

let removeDown = document.querySelector("#down");
removeDown.addEventListener("click", removeAvatar);


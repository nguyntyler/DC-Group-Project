import { addAvatar, removeAvatar } from "./modules/avatar.js";
import { getJoke, createJokeBox } from "./modules/jokes.js";
import { thumbsuprollout } from "./modules/animation.js";

let button = document.querySelector("#button");
button.addEventListener("click", () => {
  addAvatar();
  createJokeBox();
  setTimeout(getJoke, 50);
  // ASYNC DEFER
});

let removeUp = document.querySelector("#up");
removeUp.addEventListener("click", () => {
  //   thumbsuprollout();
  //   removeAvatar();
});

let removeDown = document.querySelector("#down");
// removeDown.addEventListener("click", removeAvatar);

removeUp.addEventListener("click", updateEffects);
function updateEffects() {
  //   document.documentElement.style.setProperty(`--transitiontime`, "1s");
  document.documentElement.style.setProperty(`--avatarx`, "-350vw");
  document.documentElement.style.setProperty(`--avatarslide`, "-900deg");
}

removeDown.addEventListener("click", updateEffects2);
function updateEffects2() {
  //   document.documentElement.style.setProperty(`--transitiontime`, "1s");
  document.documentElement.style.setProperty(`--avatary`, "200vh");
  document.documentElement.style.setProperty(`--avatarslide`, "-360deg");
}

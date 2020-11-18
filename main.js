import { addAvatar, removeAvatar } from "./modules/avatar.js";
import { getJoke, createJokeBox } from "./modules/jokes.js";
import { pauseshake } from "./modules/animation.js";
import { onButton, onThumbs } from "./modules/buttons.js"




let button = document.querySelector("#button");
button.addEventListener("click", () => {
  setTimeout(onButton, 1000);
  addAvatar();
  createJokeBox();
  setTimeout(getJoke, 50);
});

let removeUp = document.querySelector("#up");
removeUp.addEventListener("click", () => {
  setTimeout(onThumbs, 1000);
  updateEffects();
  setTimeout(updateEffectsReset, 2000);
  setTimeout(removeAvatar, 1000);
});

let removeDown = document.querySelector("#down");
removeDown.addEventListener("click", () => {
  setTimeout(onThumbs, 1000);
  setTimeout(updateEffects2, 500);
  upTrash();
  setTimeout(downTrash, 1500)
  setTimeout(updateEffectsReset, 2000);
  setTimeout(removeAvatar, 2000);
});

// removeUp.addEventListener("click", updateEffects);
function updateEffects() {
  document.documentElement.style.setProperty(`--avatarx`, "-150vw");
  document.documentElement.style.setProperty(`--avatarslide`, "-900deg");
}

function upTrash() {
  document.documentElement.style.setProperty(`--trashslide`, "-15vh");
}
function downTrash() {
  document.documentElement.style.setProperty(`--trashslide`, "15vh");
}

// removeDown.addEventListener("click", updateEffects2);
function updateEffects2() {
  //   document.documentElement.style.setProperty(`--transitiontime`, "1s");
  document.documentElement.style.setProperty(`--avatary`, "200vh");
  document.documentElement.style.setProperty(`--avatarslide`, "-360deg");
}

export function updateEffectsReset() {
  document.documentElement.style.setProperty(`--avatary`, "0px");
  document.documentElement.style.setProperty(`--avatarx`, "0px");
  document.documentElement.style.setProperty(`--avatarslide`, "0 deg");
}



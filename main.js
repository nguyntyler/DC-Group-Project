import { addAvatar, removeAvatar } from "./modules/avatar.js";

let button = document.querySelector("#button");
button.addEventListener("click", addAvatar);

let removeUp = document.querySelector("#up");
removeUp.addEventListener("click", removeAvatar);

let removeDown = document.querySelector("#down");
removeDown.addEventListener("click", removeAvatar);
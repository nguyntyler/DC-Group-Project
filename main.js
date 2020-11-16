import { addAvatar, removeAvatar } from "./modules/avatar.js";


let button = document.querySelector("#button")
button.addEventListener("click", addAvatar)

let remove = document.querySelector("#thumbs")
remove.addEventListener("click", removeAvatar)

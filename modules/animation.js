import { addAvatar, removeAvatar } from "./avatar";

// removeUp.addEventListener("click", updateEffects);
export function updateEffects() {
  // document.documentElement.style.setProperty(`--transitiontime`, "1s");
  document.documentElement.style.setProperty(`--avatarx`, "-350vw");
  document.documentElement.style.setProperty(`--avatarslide`, "-900deg");
}

// removeDown.addEventListener("click", updateEffects2);
export function updateEffects2() {
  // document.documentElement.style.setProperty(`--transitiontime`, "1s");
  document.documentElement.style.setProperty(`--avatary`, "200vh");
  document.documentElement.style.setProperty(`--avatarslide`, "-360deg");
}

export function updateEffectsReset() {
  document.documentElement.style.setProperty(`--avatary`, "0px");
  document.documentElement.style.setProperty(`--avatarslide`, "0 deg");
}

updateEffects();
setTimeout(updateEffectsReset, 2000);
setTimeout(removeAvatar, 2050);
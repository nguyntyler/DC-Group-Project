// sets toggle actions for thumb up and thumb down

function toggleThumb() {
  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("disable");
  thumbDown.classList.toggle("disable");
}

// sets disable action for joke button

function toggleButton() {
  let button = document.querySelector("#button");
  button.classList.toggle("disable");
}

// sets disable/enable timing for joke button to prompt thumbshake

export let onButton = () => {
  toggleButton();

  setTimeout(toggleThumb, 2000);

  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("thumbshake");
  thumbDown.classList.toggle("thumbshake");

  let button = document.querySelector("#button");
  button.classList.toggle("buttonshake");
};

// sets enable/disable timing for thumbshake action

export let onThumbs = () => {
  setTimeout(toggleButton, 2000);
  toggleThumb();

  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("thumbshake");
  thumbDown.classList.toggle("thumbshake");

  let button = document.querySelector("#button");
  button.classList.toggle("buttonshake");
};

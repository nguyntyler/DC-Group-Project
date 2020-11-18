export let addAvatar = () => {
  let newAvatarDiv = document.createElement("div");
  newAvatarDiv.id = "newAvatarDiv";
  let newAvatarIcon = document.createElement("div");
  newAvatarIcon.id = "avatar-icon";

  let seed = Math.floor(Math.random() * 500);

  let newPic = document.createElement("img");
  newPic.id = "sprite";
  newPic.src = `https://avatars.dicebear.com/api/male/${seed}.svg`;

  let avatarContainer = document.querySelector(".avatar-container");

  newAvatarIcon.append(newPic);
  avatarContainer.append(newAvatarDiv);
  newAvatarDiv.append(newAvatarIcon);

  // Button Disable
  let button = document.querySelector("#button");
  button.classList.toggle("disable");

  // Thumb Reenable
  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("disable");
  thumbDown.classList.toggle("disable");

  // Add thumb shake enable.
};

export let removeAvatar = () => {
  let avatar = document.querySelector("#avatar-icon");
  avatar.remove();

  // Remove Text
  let joke = document.querySelector("#joke");
  // joke.classList.toggle("fade-out");
  joke.remove();

  // Button Reenable
  let button = document.querySelector("#button");
  button.classList.toggle("disable");

  // Thumb Disable
  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("disable");
  thumbDown.classList.toggle("disable");

  // Add thumb shake disable.
};

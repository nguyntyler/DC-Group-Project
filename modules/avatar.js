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
};

export let removeAvatar = () => {
  let avatar = document.querySelector("#avatar-icon");
  avatar.remove();
};

// ----- Initial Avatar
export function removeInitialAvatar() {
  let initalAvatar = document.querySelector("#initial-avatar");
  initalAvatar.remove();
}

export function removeInitialSpeechBubble() {
  let initialSpeechBubble = document.querySelector("#initial-speech-bubble");
  initialSpeechBubble.remove();
}

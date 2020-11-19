import { addAvatar, removeAvatar, removeInitialAvatar } from "./modules/avatar.js";
import { getJoke, removeJoke } from "./modules/jokes.js";
import { downTrash, upTrash, rollLeft, rollDown, avatarPositionReset, buttonDisableColor, buttonEnableColor, thumbsDisableColor, thumbsEnableColor, upLid, downLid } from "./modules/animation.js";
import { onButton, onThumbs } from "./modules/buttons.js"
let counter = 0

let button = document.querySelector("#button");
button.addEventListener("click", () => {
	if (counter <= 0) {
		removeInitialAvatar();
		counter += 1;
	}
	buttonDisableColor();
	setTimeout(thumbsEnableColor, 2000)
	onButton();
	addAvatar();
	setTimeout(getJoke, 50);
});

let upThumb = document.querySelector("#up");
upThumb.addEventListener("click", () => {
	setTimeout(buttonEnableColor, 2000);
	thumbsDisableColor();
	onThumbs();
	rollLeft();
	setTimeout(avatarPositionReset, 2000);
	setTimeout(removeAvatar, 1000);
	setTimeout(removeJoke, 2000);
});

let downThumb = document.querySelector("#down");
downThumb.addEventListener("click", () => {
	setTimeout(buttonEnableColor, 2500); // From 2000
	thumbsDisableColor();
	setTimeout(onThumbs, 500); // Preset Timeout 2000
	setTimeout(rollDown, 700);
	upTrash();
	setTimeout(upLid, 400);
	setTimeout(downLid, 1600);
	setTimeout(downTrash, 2500) // From 1500
	setTimeout(avatarPositionReset, 2000);
	setTimeout(removeAvatar, 2000);
	setTimeout(removeJoke, 2500);
});



// ----- Avatar
export function rollLeft() {
    document.documentElement.style.setProperty(`--avatarx`, "-150vw");
    document.documentElement.style.setProperty(`--avatarRotate`, "-900deg");
}
export function rollDown() {
    document.documentElement.style.setProperty(`--avatary`, "200vh");
    document.documentElement.style.setProperty(`--avatarRotate`, "-360deg");
}
export function avatarPositionReset() {
    document.documentElement.style.setProperty(`--avatary`, "0px");
    document.documentElement.style.setProperty(`--avatarx`, "0px");
    document.documentElement.style.setProperty(`--avatarRotate`, "0 deg");
}

// ----- Trash Can
export function upTrash() {
    document.documentElement.style.setProperty(`--trashSlide`, "-25vh");
}
export function downTrash() {
    document.documentElement.style.setProperty(`--trashSlide`, "15vh");
}

export function upLid() {
    document.documentElement.style.setProperty(`--lidSlide`, "-3vh");
}
export function downLid() {
    document.documentElement.style.setProperty(`--lidSlide`, ".5vh");
}

// ----- Button
export function buttonDisableColor() {
    let button = document.querySelector("#button");
    button.style.backgroundColor = "#b2d6ff93";
}
export function buttonEnableColor() {
    let button = document.querySelector("#button");
    button.style.backgroundColor = "#b2d6ff";
}

// ----- Thumbs
export function thumbsDisableColor() {
    let upThumb = document.querySelector("#up");
    upThumb.style.opacity = ".5";

    let downThumb = document.querySelector("#down");
    downThumb.style.opacity = ".5";
}
export function thumbsEnableColor() {
    let upThumb = document.querySelector("#up");
    upThumb.style.opacity = "1";

    let downThumb = document.querySelector("#down");
    downThumb.style.opacity = "1";
}
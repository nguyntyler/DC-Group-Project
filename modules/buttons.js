function toggleThumb() {
    let thumbUp = document.querySelector("#up");
    let thumbDown = document.querySelector("#down");
    thumbUp.classList.toggle("disable");
    thumbDown.classList.toggle("disable");
}

function toggleButton() {
    let button = document.querySelector("#button");
    button.classList.toggle("disable");
}

export let onButton = () => {
    // Button Disable
    toggleButton();
    // Thumb Enable
    setTimeout(toggleThumb, 2000);
    // Add thumb shake enable.
    let thumbUp = document.querySelector("#up");
    let thumbDown = document.querySelector("#down");
    thumbUp.classList.toggle("thumbshake");
    thumbDown.classList.toggle("thumbshake");
}

export let onThumbs = () => {
    // Button Reenable
    setTimeout(toggleButton, 2000);
    // Thumb Disable
    toggleThumb();
    // Add thumb shake disable.
    let thumbUp = document.querySelector("#up");
    let thumbDown = document.querySelector("#down");
    thumbUp.classList.toggle("thumbshake");
    thumbDown.classList.toggle("thumbshake");
}

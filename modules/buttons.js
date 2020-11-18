

export let onButton = () => {
    // Button Disable
    let button = document.querySelector("#button");
    button.classList.toggle("disable");

    // Thumb Reenable
    let thumbUp = document.querySelector("#up");
    let thumbDown = document.querySelector("#down");
    thumbUp.classList.toggle("disable");
    thumbDown.classList.toggle("disable");

    // Add thumb shake enable.
    thumbUp.classList.toggle("thumbshake");
    // setInterval(pauseshake, 3000)
    thumbDown.classList.toggle("thumbshake");
}

export let onThumbs = () => {
    // Button Reenable
    let button = document.querySelector("#button");
    button.classList.toggle("disable");

    // Thumb Disable
    let thumbUp = document.querySelector("#up");
    let thumbDown = document.querySelector("#down");
    thumbUp.classList.toggle("disable");
    thumbDown.classList.toggle("disable");

    // Add thumb shake disable.
    thumbUp.classList.toggle("thumbshake");
    thumbDown.classList.toggle("thumbshake");
}

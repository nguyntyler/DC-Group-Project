export let addAvatar = () => {
    let seed = Math.floor((Math.random() * 151))

    let newPic = document.createElement("img")
    newPic.id = "image"
    newPic.src = `https://avatars.dicebear.com/api/male/${seed}.svg`

    let avatarDiv = document.querySelector("#avatar-icon")

    avatarDiv.append(newPic)
}

export let removeAvatar = () => {
    let pic = document.querySelector("#image");
    pic.remove()
}
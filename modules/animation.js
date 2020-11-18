export function pauseshake() {
  let thumbUp = document.querySelector("#up");
  let thumbDown = document.querySelector("#down");
  thumbUp.classList.toggle("thumb-shake-toggle");
  thumbDown.classList.toggle("thumb-shake-toggle");
}
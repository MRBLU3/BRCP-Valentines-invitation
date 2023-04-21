const x = document.querySelector('button.button--no');
x.addEventListener("mouseover", moveHover);
function moveHover() {
 const i = Math.floor(Math.random()*500) + 1;
 const j = Math.floor(Math.random()*500) + 1;

  x.style.left = i + "px";
  x.style.top = j + "px";
}

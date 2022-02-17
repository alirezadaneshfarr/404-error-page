const body = document.querySelector('body');
window.onmousemove = function(e) {
    let x = e.clientX;
    let y = e.clientY;
    body.style.backgroundPositionX = (x / 4) + "px";
    body.style.backgroundPositionY = (y / 4) + "px";
}
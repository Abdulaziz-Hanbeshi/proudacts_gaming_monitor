

/* if you click on the moniter ,it changes and the backgrond color changes   */

let img = document.querySelector('.func_img');

let container = document.querySelector('.container'); /* .container the big father */

function monitor(x){
    img.src =x;
}
function colors(color){
    container.style.background = color;
}
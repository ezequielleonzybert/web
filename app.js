let polygon = document.getElementsByClassName('polygon');
let page = null;

window.onload = ()=>{
    yellow.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";   
    yellow_stroke.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";  
    cyan.style.clipPath =        "polygon(-100% 190%, -100% -90%, 130% 200%)";
    cyan_stroke.style.clipPath = "polygon(-100% 185%, -100% -95%, 130% 195%)";
    magenta.style.clipPath = " polygon(-100% 150%, 200% 30%, 190% 200%)";
}

addEventListener("click", (e)=>{
    page = e.target.id;
    transitions(page);
})

function transitions(page){
    switch (page) {
        case "yellow":
            yellow.style.clipPath =        "polygon(-100% -5%, 200% -5%, 50% 97.45%)";
            yellow_stroke.style.clipPath = "polygon(-100% 0%, 200% 0%, 50% 103.45%)";
            cyan.style.clipPath =        "polygon(-90% 200%, -100% 0% , 50% 103.45%)";
            cyan_stroke.style.clipPath = "polygon(-90% 205%, -100% -5%, 60% 103.45%)";
            magenta.style.clipPath = "polygon(-90% 200%, 200% 0, 190% 200%)";
            break;
        case "cyan":
            yellow.style.clipPath = "polygon(-100% -105%, 200% -105%, 90% 15%)";
            yellow_stroke.style.clipPath = "polygon(-100% -100%, 200% -100%, 90% 20%)";
            cyan.style.clipPath =        "polygon(-90% 200%, -100% -100%, 200% 0%)";
            cyan_stroke.style.clipPath = "polygon(-90% 205%, -100% -105%, 210% 0%)";
            magenta.style.clipPath = "polygon(-90% 200%, 200% 0%, 190% 200%)";
            break;
        case "magenta":
            yellow.style.clipPath = "polygon(-100% -105%, 200% -105%, 90% 15%)";
            yellow_stroke.style.clipPath = "polygon(-100% -100%, 200% -100%, 90% 20%)";
            cyan.style.clipPath =        "polygon(-90% 200%, -100% 0%, 50% 103.45%)";
            cyan_stroke.style.clipPath = "polygon(-90% 195%, -100% -5%, 60% 103.45%)";
            magenta.style.clipPath = "polygon(-100% 0%, 200% -100%, 190% 200%)";
            break;
        default:
            yellow.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";  
            yellow_stroke.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";  
            cyan.style.clipPath = "polygon(-100% 200%, -100% -90%, 130% 200%)";
            cyan_stroke.style.clipPath = "polygon(-100% 185%, -100% -95%, 130% 195%)";
            magenta.style.clipPath = " polygon(-100% 150%, 200% 30%, 200% 200%)";
            break;
    }
}


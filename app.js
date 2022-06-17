let polygon = document.getElementsByClassName('polygon');
let page = null;

window.onload = ()=>{
    about.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";    
    portfolio.style.clipPath = "polygon(-100% 200%, -100% -90%, 130% 200%)";
    contact.style.clipPath = " polygon(-100% 150%, 200% 30%, 200% 200%)";
}

addEventListener("click", (e)=>{
    page = e.target.id;
    transitions(page);
})

function transitions(page){
    switch (page) {
        case "about":
            about.style.clipPath = "polygon(-100% 0, 200% 0, 50% 103.44%)";
            portfolio.style.clipPath = "polygon(-100% 200%, -100% 0, 190% 200%)";
            contact.style.clipPath = "polygon(-90% 200%, 200% 0, 200% 200%)";
            break;
        case "portfolio":
            about.style.clipPath = "polygon(75% 0, 150% 0,  90% 20%)";
            contact.style.clipPath = "polygon(" +  a  + ", 1000% 1000%, " + b +")";
            portfolio.style.clipPath = "polygon(0 -100%, -1000% 1000%,100% 220% , 150% 0, 90% 20%)";
            break;
        case "contact":
            about.style.clipPath = "polygon(-100% -100%, 200% -100%,  90% 20%)";
            portfolio.style.clipPath = "polygon(-100% 200%, -100% 0, 190% 200%)";
            contact.style.clipPath = "polygon(-100% 10%, 200% -100%, 190% 200%)";
            break;
        default:
            about.style.clipPath = "polygon(-100% -60% , 200% -100%, 65% 30%)";    
            portfolio.style.clipPath = "polygon(-100% 200%, -100% -90%, 130% 200%)";
            contact.style.clipPath = " polygon(-100% 150%, 200% 30%, 200% 200%)";
            break;
    }
}


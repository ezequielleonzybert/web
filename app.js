let polygon = document.getElementsByClassName('polygon');
let page = null;
let
    a = "50% 110%",
    b = "200% 0",
    c = "-100% 0";

window.onload = ()=>{
    about.style.clipPath = "polygon(-200% -100% , 200% -100%, 65% 25%)";
    contact.style.clipPath = " polygon(-120% 200%, 1000% 1000%, 200% 5%)";
    portfolio.style.clipPath = "polygon(0 40%, -1000% 1000%, 200% 280%)";
}

addEventListener("click", (e)=>{
    page = e.target.id;
    transitions(page);
})

function transitions(page){
    switch (page) {
        case "about":
            about.style.clipPath = "polygon(" + c + "," + b + "," + a + ")";
            contact.style.clipPath = "polygon(" +  a  + ", 1000% 1000%, " + b +")";
            portfolio.style.clipPath = "polygon(" + c + ", -1000% 1000%, " + a + ")";
            break;
        case "contact":
            about.style.clipPath = "polygon(75% 0, 150% 0,  90% 20%)";
            contact.style.clipPath = "polygon(" + c + ", 100% 220%, 100% -50%)";
            portfolio.style.clipPath = "polygon(" + c + ", -1000% 1000%, " + a + ")";
            break;
        case "portfolio":
            about.style.clipPath = "polygon(75% 0, 150% 0,  90% 20%)";
            contact.style.clipPath = "polygon(" +  a  + ", 1000% 1000%, " + b +")";
            portfolio.style.clipPath = "polygon(0 40%, -1000% 1000%, 200% 280%)";
            break;
        default:
            about.style.clipPath = "polygon(-200% -100% , 200% -100%, 65% 25%);";
            contact.style.clipPath = " polygon(-120% 200%, 1000% 1000%, 200% 5%)";
            portfolio.style.clipPath = "polygon(0 40%, -1000% 1000%, 200% 280%)";
            break;
    }
}


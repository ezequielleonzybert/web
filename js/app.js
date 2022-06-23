let frame = document.getElementById('frame');
let polygons = document.getElementsByClassName('polygon');
let titles = document.getElementsByClassName('title');
let page = "", previous_page = "";
var transitionEnd = whichTransitionEvent();
let transition_ended = true;
let vw , vh;
//triangles
let Y, Ys, C, Cs, M, Ms;

window.onload = ()=>{
    vw = Math.max(document.documentElement.clientWidth );
    vh = Math.max(document.documentElement.clientHeight );
    transitions(page);
    
}

function transitions(page){
    update(false);
}

function update(resize){
    let size = 5.5;
    for(title of titles){
        if(resize){
            title.style.transition = "0s";
        }
        else{
            title.style.transition = "1s";
        }
    }
    switch (page) {
        default:
            cyan.style.zIndex = 0;
            cyan_stroke.style.zIndex = 0;
            magenta.style.zIndex = -1;
            magenta_stroke.style.zIndex = -1;    
            Y = new Triangle(-100,-60,200,-100,65,30);
            Ys = new Triangle(-100,-60,200,-100,65,30);
            C = new Triangle(-100,200,-100,-90,50.7,100);
            Cs = new Triangle(-100,200,-100,-90,50.7,100);
            M = new Triangle(44.5,92.2,200,30,130,200);
            Ms = new Triangle(44.5,92.2,200,30,130,200);

            //titles
            about.style.margin = `10vh 0 0 52vw`;
            about.style.fontSize = `${size}vw`;
            about.style.color = "black";
            portfolio.style.margin = `89vh 0 0 6vw`;
            portfolio.style.fontSize = `${size}vw`;
            portfolio.style.color = "black";
            contact.style.margin = `90vh 0 0 67vw`;
            contact.style.fontSize = `${size}vw`;
            contact.style.color = "black";

            break;
        case "yellow":
            cyan.style.zIndex = 0;
            cyan_stroke.style.zIndex = 0;
            magenta.style.zIndex = -1;
            magenta_stroke.style.zIndex = -1;
            Y = new Triangle(-100,0,200,0,50,115.4);
            Ys = new Triangle(-100,0,200,0,50,115.4);
            C = new Triangle(-60,200,-100,0,50,115.4);
            Cs = new Triangle(-60,200,-100,0,50,115.4);
            M = new Triangle(50,115.4,200,0,160,200);
            Ms = new Triangle(50,115.4,200,0,160,200);
            
            //titles
            about.style.margin = `10vh 0 0 10vw`;
            about.style.fontSize = `${size*1.2}vw`;
            about.style.color = "black";
            portfolio.style.margin = `94vh 0 0 3.25vw`;
            portfolio.style.fontSize = `${size/1.75}vw`;
            portfolio.style.color = "black";
            contact.style.margin = `94vh 0 0 80vw`;
            contact.style.fontSize = `${size/1.75}vw`;
            contact.style.color = "black";
            break;
        case "cyan":
            if(previous_page == "magenta"){
                cyan.style.zIndex = 0;
                cyan_stroke.style.zIndex = 0;
                magenta.style.zIndex = -1;
                magenta_stroke.style.zIndex = -1;
            }            
            Y = new Triangle(-100,-100,200,-100,90,20);
            Ys = new Triangle(-100,-100,200,-100,90,20);
            C = new Triangle(-60,200,0,-115.4,200,0);
            Cs = new Triangle(-60,200,0,-115.4,200,0);
            M = new Triangle(50,115.4,200,0,160,200);
            Ms = new Triangle(50,115.4,200,0,160,200);
            //titles
            about.style.margin = `7vh 0 0 82vw`;
            about.style.fontSize = `${size/1.75}vw`;
            about.style.color = "black";
            portfolio.style.margin = `10vh 0 0 10vw`;
            portfolio.style.fontSize = `${size*1.2}vw`;
            portfolio.style.color = "black";
            contact.style.margin = `94vh 0 0 80vw`;
            contact.style.fontSize = `${size/1.75}vw`;
            contact.style.color = "black";    
            break;
        case "magenta":
            if(previous_page == "cyan"){
                magenta.style.zIndex = 0;
                magenta_stroke.style.zIndex = 0;
                cyan.style.zIndex = -1;
                cyan_stroke.style.zIndex = -1;
            }
            Y = new Triangle(-100,-100,200,-100,90,20);
            Ys = new Triangle(-100,-100,200,-100,90,20);
            C = new Triangle(-60,200,-100,0,50,115.4);
            Cs = new Triangle(-60,200,-100,0,50,115.4);
            M = new Triangle(-100,0,200,-100,160,200);
            Ms = new Triangle(-100,0,200,-100,160,200);
            //titles
            about.style.margin = `7vh 0 0 82vw`;
            about.style.fontSize = `${size/1.75}vw`;
            about.style.color = "black";
            portfolio.style.margin = `94vh 0 0 3.25vw`;
            portfolio.style.fontSize = `${size/1.75}vw`;
            portfolio.style.color = "black";
            contact.style.margin = `87vh 0 0 60vw`;
            contact.style.fontSize = `${size*1.2}vw`;
            contact.style.color = "black";   
            break;
    }
    Y.uniformScale(-1);
    Ys.uniformScale(1);
    C.uniformScale(-1);
    Cs.uniformScale(1);
    M.uniformScale(-1);
    Ms.uniformScale(1);
    //triangles
    yellow.style.clipPath = `polygon(
        ${Y.points[0].x}vw ${Y.points[0].y}vh,
        ${Y.points[1].x}vw ${Y.points[1].y}vh, 
        ${Y.points[2].x}vw ${Y.points[2].y}vh)`;
    yellow_stroke.style.clipPath = `polygon(
        ${Ys.points[0].x}vw ${Ys.points[0].y}vh,
        ${Ys.points[1].x}vw ${Ys.points[1].y}vh, 
        ${Ys.points[2].x}vw ${Ys.points[2].y}vh)`;
    cyan.style.clipPath = `polygon(
        ${C.points[0].x}vw ${C.points[0].y}vh,
        ${C.points[1].x}vw ${C.points[1].y}vh,
        ${C.points[2].x}vw ${C.points[2].y}vh)`; 
    cyan_stroke.style.clipPath = `polygon(
        ${Cs.points[0].x}vw ${Cs.points[0].y}vh,
        ${Cs.points[1].x}vw ${Cs.points[1].y}vh,
        ${Cs.points[2].x}vw ${Cs.points[2].y}vh)`; 
    magenta.style.clipPath = `polygon(
        ${M.points[0].x}vw ${M.points[0].y}vh,
        ${M.points[1].x}vw ${M.points[1].y}vh,
        ${M.points[2].x}vw ${M.points[2].y}vh)`;
    magenta_stroke.style.clipPath = `polygon(
        ${Ms.points[0].x}vw ${Ms.points[0].y}vh,
        ${Ms.points[1].x}vw ${Ms.points[1].y}vh,
        ${Ms.points[2].x}vw ${Ms.points[2].y}vh)`;

    //frame
    size = vh * .015;
    frame.style.clipPath = 
        `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 
        ${size}px 0, ${size}px ${vh-size}px, ${vw-size}px ${vh-size}px, ${vw-size}px ${size}px, 0 ${size}px)`;
    
    }

addEventListener("resize",(e)=>{
    vw = Math.max(document.documentElement.clientWidth);
    vh = Math.max(document.documentElement.clientHeight);
    update(e.isTrusted);
})

addEventListener(transitionEnd,()=>{
    transition_ended = true;
}, false);

addEventListener("click", (e)=>{
    if(transition_ended){
        previous_page = page;
        page = e.target.id; 
        switch(page){
            case "about":
                page = "yellow";
                break;
            case "portfolio":
                page = "cyan";
                break;
            case "contact":
                page = "magenta";
                break;
        }
        if(page!= "yellow" && page != "cyan" && page != "magenta"){
            page = "";
        }
        if(page != previous_page){
            transition_ended = false;
            transitions(page);
        }
    }
})
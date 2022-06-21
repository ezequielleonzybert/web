let frame = document.getElementById('frame');
let polygons = document.getElementsByClassName('polygon');
let page = "", previous_page = "";
var transitionEnd = whichTransitionEvent();
let transition_ended = true;
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
//triangles
let Y, Ys, C, Cs, M, Ms;

window.onload = ()=>{
    transitions(page);
}

function transitions(page){
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
            break;
    }
    Y.uniformScale(-1);
    Ys.uniformScale(1);
    C.uniformScale(-1);
    Cs.uniformScale(1);
    M.uniformScale(-1);
    Ms.uniformScale(1);
    update();
}

function update(){
    //triangles
    yellow.style.clipPath = `polygon(
        ${Y.points[0].x}% ${Y.points[0].y}%,
        ${Y.points[1].x}% ${Y.points[1].y}%, 
        ${Y.points[2].x}% ${Y.points[2].y}%)`;
    yellow_stroke.style.clipPath = `polygon(
        ${Ys.points[0].x}% ${Ys.points[0].y}%,
        ${Ys.points[1].x}% ${Ys.points[1].y}%, 
        ${Ys.points[2].x}% ${Ys.points[2].y}%)`;
    cyan.style.clipPath = `polygon(
        ${C.points[0].x}% ${C.points[0].y}%,
        ${C.points[1].x}% ${C.points[1].y}%,
        ${C.points[2].x}% ${C.points[2].y}%)`; 
    cyan_stroke.style.clipPath = `polygon(
        ${Cs.points[0].x}% ${Cs.points[0].y}%,
        ${Cs.points[1].x}% ${Cs.points[1].y}%,
        ${Cs.points[2].x}% ${Cs.points[2].y}%)`; 
    magenta.style.clipPath = `polygon(
        ${M.points[0].x}% ${M.points[0].y}%,
        ${M.points[1].x}% ${M.points[1].y}%,
        ${M.points[2].x}% ${M.points[2].y}%)`;
    magenta_stroke.style.clipPath = `polygon(
        ${Ms.points[0].x}% ${Ms.points[0].y}%,
        ${Ms.points[1].x}% ${Ms.points[1].y}%,
        ${Ms.points[2].x}% ${Ms.points[2].y}%)`;

    //frame
    size = vh * .015;
    frame.style.clipPath = 
        `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 
        ${size}px 0, ${size}px ${vh-size}px, ${vw-size}px ${vh-size}px, ${vw-size}px ${size}px, 0 ${size}px)`
}

addEventListener("resize",(e)=>{
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    update();
})

addEventListener(transitionEnd,()=>{
    transition_ended = true;
}, false);

addEventListener("click", (e)=>{
    if(transition_ended){
        previous_page = page;
        page = e.target.id; 
        if(page!= "yellow" && page != "cyan" && page != "magenta"){
            page = "";
        }
        if(page != previous_page){
            transition_ended = false;
            transitions(page);
        }
    }
    
   
})
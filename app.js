let polygon = document.getElementsByClassName('polygon');
let page = null, previous_page = null;

//triangles
let Y = {p1:{}, p2:{}, p3:{}};
let Ys = {p1:{}, p2:{}, p3:{}};
let C = {p1:{}, p2:{}, p3:{}};
let Cs = {p1:{}, p2:{}, p3:{}};
let M = {p1:{}, p2:{}, p3:{}};
let Ms = {p1:{}, p2:{}, p3:{}};

window.onload = ()=>{
    transitions(page);
}

addEventListener("click", (e)=>{
    previous_page = page;
    page = e.target.id;
    transitions(page);
})

function transitions(page){
    switch (page) {
        default:
            cyan.style.zIndex = 0;
            cyan_stroke.style.zIndex = 0;
            magenta.style.zIndex = -1;
            magenta_stroke.style.zIndex = -1;
            
            setTrianglePoints(Y, -100, -60, 200, -100, 65, 30);
            //Ys = {...Y};
            setTrianglePoints(C, -100, 200, -100, -90, 50.7, 100);
            setTrianglePoints(Cs, -100, 200, -100, -90, 50.7, 100);
            setTrianglePoints(M, 44.5, 92.2, 200, 30, 130, 200);
            setTrianglePoints(Ms, 44.5, 92.2, 200, 30, 130, 200);
            break;
        case "yellow":
            setTrianglePoints(Y,  -100, 0, 200, 0, 50, 115.4);
            //Ys = {...Y};
            console.log(Y);
            scaleTriangle(Y, 1.2);
            console.log(Y);
            setTrianglePoints(C,  -60, 200, -100, 0, 50, 115.4);
            setTrianglePoints(Cs, -60, 200, -100, 0, 50, 115.4);
            setTrianglePoints(M,  50, 115.4, 200, 0, 160, 200);
            setTrianglePoints(Ms, 50, 115.4, 200, 0, 160, 200);
            break;
        case "cyan":
            if(previous_page == "magenta"){
                cyan.style.zIndex = 0;
                cyan_stroke.style.zIndex = 0;
                magenta.style.zIndex = -1;
                magenta_stroke.style.zIndex = -1;
            }            
            setTrianglePoints(Y,  -100, -100, 200, -100, 90, 20);
            setTrianglePoints(Ys, -100, -100, 200, -100, 90, 20);
            setTrianglePoints(C,  -60, 200, 0, -115.4, 200, 0);
            setTrianglePoints(Cs, -60, 200, 0, -115.4, 200, 0);
            setTrianglePoints(M,  50, 115.4, 200, 0, 160, 200);
            setTrianglePoints(Ms, 50, 115.4, 200, 0, 160, 200);
            break;
        case "magenta":
            if(previous_page == "cyan"){
                magenta.style.zIndex = 0;
                magenta_stroke.style.zIndex = 0;
                cyan.style.zIndex = -1;
                cyan_stroke.style.zIndex = -1;
            }
            setTrianglePoints(Y,  -100, -100, 200, -100, 90, 20);
            setTrianglePoints(Ys, -100, -100, 200, -100, 90, 20);
            setTrianglePoints(C,  -60, 200, -100, 0, 50, 115.4);
            setTrianglePoints(Cs, -60, 200, -100, 0, 50, 115.4);
            setTrianglePoints(M,  -100, 0, 200, -100, 160, 200);
            setTrianglePoints(Ms, -100, 0, 200, -100, 160, 200);
            break;
    }
    update();
}

function update(){
    yellow.style.clipPath = 
    `polygon(${Y.p1.x}% ${Y.p1.y}% , ${Y.p2.x}% ${Y.p2.y}%, ${Y.p3.x}% ${Y.p3.y}%)`;
    yellow_stroke.style.clipPath = 
    `polygon(${Ys.p1.x}% ${Ys.p1.y}% , ${Ys.p2.x}% ${Ys.p2.y}%, ${Ys.p3.x}% ${Ys.p3.y}%)`;
    cyan.style.clipPath =
    `polygon(${C.p1.x}% ${C.p1.y}% , ${C.p2.x}% ${C.p2.y}%, ${C.p3.x}% ${C.p3.y}%)`; 
    cyan_stroke.style.clipPath =
    `polygon(${Cs.p1.x}% ${Cs.p1.y}% , ${Cs.p2.x}% ${Cs.p2.y}%, ${Cs.p3.x}% ${Cs.p3.y}%)`; 
    magenta.style.clipPath = 
    `polygon(${M.p1.x}% ${M.p1.y}% , ${M.p2.x}% ${M.p2.y}%, ${M.p3.x}% ${M.p3.y}%)`;
    magenta_stroke.style.clipPath = 
    `polygon(${Ms.p1.x}% ${Ms.p1.y}% , ${Ms.p2.x}% ${Ms.p2.y}%, ${Ms.p3.x}% ${Ms.p3.y}%)`;
 }

function setTrianglePoints(triangle, p1x, p1y, p2x, p2y, p3x, p3y){
    triangle.p1.x = p1x;
    triangle.p1.y = p1y;
    triangle.p2.x = p2x;
    triangle.p2.y = p2y;
    triangle.p3.x = p3x;
    triangle.p3.y = p3y;
}
function copyTriangle(triangle1, triangle2){
    triangle1 = triangle2;
}
function scaleTriangle(triangle, factor){
    const center = triangleCenter(triangle);

    triangle.p1.x -= center.x;
    triangle.p1.y -= center.y;
    triangle.p2.x -= center.x;
    triangle.p2.y -= center.y;
    triangle.p3.x -= center.x;
    triangle.p3.y -= center.y;

    triangle.p1.x *= factor;
    triangle.p1.y *= factor;
    triangle.p2.x *= factor;
    triangle.p2.y *= factor;
    triangle.p3.x *= factor;
    triangle.p3.y *= factor;

    triangle.p1.x += center.x;
    triangle.p1.y += center.y;
    triangle.p2.x += center.x;
    triangle.p2.y += center.y;
    triangle.p3.x += center.x;
    triangle.p3.y += center.y;
 }
function triangleCenter(triangle){
    const x = (triangle.p1.x + triangle.p2.x + triangle.p3.x) / 3;
    const y = (triangle.p1.y + triangle.p2.y + triangle.p3.y) / 3;
    return {x:x,y:y};
}
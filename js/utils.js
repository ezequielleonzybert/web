// function setTrianglePoints(triangle, p1x, p1y, p2x, p2y, p3x, p3y){
//     triangle.p1.x = p1x;
//     triangle.p1.y = p1y;
//     triangle.p2.x = p2x;
//     triangle.p2.y = p2y;
//     triangle.p3.x = p3x;
//     triangle.p3.y = p3y;
// }
// function translatePolygon(triangle, x, y){
//     for(const p of Object.values(triangle)){
//         p.x += x;
//         p.y += y;
//     }
// }
// function triangleCenter(triangle){
//     const x = (triangle.p1.x + triangle.p2.x + triangle.p3.x) / 3;
//     const y = (triangle.p1.y + triangle.p2.y + triangle.p3.y) / 3;
//     return {x:x, y:y};
// }
// function scaleTriangle(triangle, factor){
//     const center = triangleCenter(triangle);

//     translatePolygon(triangle, -center.x, -center.y);

//     triangle.p1.x *= factor;
//     triangle.p1.y *= factor;
//     triangle.p2.x *= factor;
//     triangle.p2.y *= factor;
//     triangle.p3.x *= factor;
//     triangle.p3.y *= factor;

//     translatePolygon(triangle, center.x, center.y);
//  }
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
function getMagnitude(v){
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
function getUnit(v){
    const mag = getMagnitude(v);
    return {x: v.x/mag, y: v.y/mag};
}
function getNormal(v){
    const aux = v.y;
    v.y = -v.x;
    v.x = aux;
    return {x: v.x, y: v.y};
}
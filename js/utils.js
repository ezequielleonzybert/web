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
    return {x: v.y, y: -v.x};
}
function dist(v){
    return Math.sqrt(v.x**2 + v.y**2);
}
function linesIntersection(l1, l2) {
    let
        x1 = l1.p1.x,
        y1 = l1.p1.y,
        x2 = l1.p2.x,
        y2 = l1.p2.y,
        x3 = l2.p1.x,
        y3 = l2.p1.y,
        x4 = l2.p2.x,
        y4 = l2.p2.y;

    // Check if none of the lines are of length 0
      if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
          return false
      }
  
      denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  
    // Lines are parallel
      if (denominator === 0) {
          return false
      }
  
      let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
      let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
  
    // Return a object with the x and y coordinates of the intersection
      let x = x1 + ua * (x2 - x1)
      let y = y1 + ua * (y2 - y1)
      return {x, y}
  }

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
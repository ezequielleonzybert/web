class Polygon{
    constructor(points){
        this.points = points;
    }
    translate(x, y){
        this.points.forEach((p)=>{
            p.x += x;
            p.y += y; 
        })
    }
    get center(){
        let sumX = 0, sumY = 0;
        this.points.forEach((p)=>{
            sumX += p.x;
            sumY += p.y;
        })
        const x = sumX/this.points.length;
        const y = sumY/this.points.length;
        return {x:x, y:y};
    }
    scale(factor){
        const center = this.center;
        this.translate(-center.x, -center.y);
        this.points.forEach((p)=>{
            p.x *= factor;
            p.y *= factor;
        })
        this.translate(center.x, center.y);
    }
}

class Triangle extends Polygon{
    constructor(p1x,p1y,p2x,p2y,p3x,p3y){
        const p1 = {x:p1x, y:p1y};
        const p2 = {x:p2x, y:p2y};
        const p3 = {x:p3x, y:p3y};
        const points = [p1, p2, p3];
        super(points);
    }
    stroke(size){
    let normal0, normal1, normal2;

    super.translate(-super.points[0].x, -super.points[0].y);
    normal1 = getUnit(getNormal(super.points[1]));
    normal2 = getUnit(getNormal(super.points[2]));
    super.translate(-super.points[1].x, -super.points[1].y);
    normal0 = getUnit(getNormal(super.points[0]));
    

}
}
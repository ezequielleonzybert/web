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
    rotate(angle){
        this.points.forEach((p)=>{
            let x = p.x;
            let y = p.y;
            p.x = x*Math.cos(angle) - y*Math.sin(angle);
            p.y = x*Math.sin(angle) + y*Math.cos(angle);
        });
    }
}

class Triangle extends Polygon{
    constructor(p1x,p1y,p2x,p2y,p3x,p3y){
        const p1 = {x:p1x, y:p1y};
        const p2 = {x:p2x, y:p2y};
        const p3 = {x:p3x, y:p3y};
        const points = [p1,p2,p3];
        super(points);
    }
    uniformScale(size){
        let normals = [{},{},{}];
        let lines = [
            {p1:{}, p2:{}},
            {p1:{}, p2:{}},
            {p1:{}, p2:{}}
        ];

        for(let i = 0; i < this.points.length; i++){
            const j = (i+1) % this.points.length;
            const k = (i+2) % this.points.length;

            //getting normals
            const translation = {...this.points[i]};
            this.translate(-translation.x, -translation.y);

            normals[i] = getUnit(getNormal(this.points[j]));

            // const angle = Math.atan2(this.points[j].x, this.points[j].y); // + o -?
            // this.rotate(angle);
            // // if(this.points[j].y > this.points[k].y){
            // //     normals[i].x *= -1;
            // //     normals[i].y *= -1;
            // // }
            // this.rotate(-angle);

            this.translate(translation.x, translation.y);

            //new lines
            lines[i].p1.x = this.points[i].x + normals[i].x * size;
            lines[i].p1.y = this.points[i].y + normals[i].y * size;
            lines[i].p2.x = this.points[j].x + normals[i].x * size;
            lines[i].p2.y = this.points[j].y + normals[i].y * size;
        }

        //find lines intersections
        this.points[0] = linesIntersection(lines[0], lines[1]);
        this.points[1] = linesIntersection(lines[1], lines[2]);
        this.points[2] = linesIntersection(lines[2], lines[0]);
    }
}
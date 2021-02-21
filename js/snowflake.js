/*
* Koch-SnowFlake-Javascript
* MIT License
*/
// Distance formula
const distFromOrigin = (x,y) => sqrt(x*x + y*y);
const slope = (p2, p1) => (p2.y - p1.y) / (p2.x - p1.x);
const intercept = (m, p2) => p2.y - m * p2.x;
const sin60 = 0.5 * Math.sqrt(3);

class Point {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

class Sketch {
    constructor(ctx, cx, cy, style = null) {
        this.ctx = ctx;
        this.style = style;

        this.ctx.strokeStyle = "#ff0000";
        this.ctx.translate(cx, cy);
     }

    init(points) {
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        this.ctx.lineTo(points[1].x, points[1].y);
        this.ctx.lineTo(points[2].x, points[2].y);
        this.ctx.lineTo(points[3].x, points[3].y);
        this.ctx.closePath();
        this.ctx.stroke();
    }

    draw(points) {
        this.ctx.beginPath();
        for (i = 0; i<points.length; i+=4)
        {
            this.ctx.moveTo(points[i].x, points[i].y);
            this.ctx.lineTo(points[i+1].x, points[i+1].y);
            this.ctx.lineTo(points[i+2].x, points[i+2].y);
            this.ctx.lineTo(points[i+3].x, points[i+3].y);
        }
        this.ctx.closePath();
        this.ctx.stroke();
}
}

class KochGenerator {
    constructor(size, iterations = 0)
    {
        this.size = size;
        // construct our initial triangle
        // Each angle is pi/3
        let h = size * sin60;  
        this.points = new Array();
        let p1 = new Point(0, h/2);
        this.points.push(p1);
        let p2 = new Point(-size/2, -h/2);
        this.points.push(p2);
        let p3 = new Point(size/2, -h/2);
        this.points.push(p3);
        this.points.push(p1);
    }


    triangle(p1, p2) {
        m = slope(p2, p1);
        b = intercept(m, p2);   
    }

    // Calculate the next round of triangles
    nextIteration() {
        return;
    }
}

function getCSS(cssClass)
{
    return null;
}

function DrawSnowflake(ctx, cx, cy, size, iterations = 0, style = null)
{
    generator = new KochGenerator(size);
    cssStyles = getCSS(style)
    sketcher = new Sketch(ctx, cx, cy, cssStyles);
    // Draw the base triangle
    sketcher.init(generator.points)   
    // Draw remaining triangles
    for (i=0; i<iterations; i++)
    {
        generator.nextIteration();
        sketcher.draw(generator.points)   
    }
}

$(function() {
    var ctx = $('#canvas')[0].getContext('2d');
    DrawSnowflake(ctx, canvas.width/2, canvas.height/2, 100);
})  


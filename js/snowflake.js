/*
* Koch-SnowFlake-Javascript
* MIT License
*/
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
    constructor(size, iterations = 1)
    {
        this.size = size;
        // construct our initial triangle
        // Each angle is pi/3
        let h = size * (Math.sqrt(3)/2);  
        this.points = new Array();
        let p1 = new Point(0, h/2);
        this.points.push(p1);
        let p2 = new Point(-size/2, -h/2);
        this.points.push(p2);
        let p3 = new Point(size/2, -h/2);
        this.points.push(p3);
        this.points.push(p1);
    }

    nextIteration() {
        return;
    }
}

function getCSS(cssClass)
{
    return null;
}

function DrawSnowflake(ctx, cx, cy, size, iterations = 1, style = null)
{
    generator = new KochGenerator(size);
    cssStyles = getCSS(style)
    sketcher = new Sketch(ctx, cx, cy, cssStyles);
    for (i=0; i<iterations; i++)
    {
        sketcher.draw(generator.points)   
        generator.nextIteration();
    }
}

$(function() {
    var ctx = $('#canvas')[0].getContext('2d');
    DrawSnowflake(ctx, canvas.width/2, canvas.height/2, 100);
})  


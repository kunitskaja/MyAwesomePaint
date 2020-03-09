window.Ray =  class Ray extends Line {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center, secondPoint);
    }

    draw(){
        const secondPoint = super.findAxisIntersections(this.center, this.secondPoint).Y;
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.strokeStyle = this.getLineColor().toString();
        context.moveTo(this.center.x, this.center.y);
        context.lineTo(secondPoint.x, secondPoint.y);
        context.stroke();
    }
};
window.Segment = class Segment extends Ray {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center, secondPoint);
    }

    draw(){
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.strokeStyle = this.getLineColor().toString();
        context.beginPath();
        context.moveTo(this.center.x, this.center.y);
        context.lineTo(this.secondPoint.x, this.secondPoint.y);
        context.stroke();
    }
};
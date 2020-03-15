window.Ray = class Ray extends Line {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center, secondPoint);
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        const first = this.center;
        const {second} = this.getDrawPoints(canvas.height, canvas.width);
        // context.moveTo(first.x - 10, first.y);
        // context.lineTo(first.x + 10, first.y);
        // context.stroke();

        // context.moveTo(this.secondPoint.x, this.secondPoint.y - 5);
        // context.lineTo(this.secondPoint.x, this.secondPoint.y + 5);
        // context.stroke();

        context.strokeStyle = this.getLineColor().toString();
        context.beginPath();
        context.moveTo(first.x, first.y);
        context.lineTo(second.x, second.y);
        context.stroke();
    }
};
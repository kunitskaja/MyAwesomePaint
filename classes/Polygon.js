window.Polygon = class Polygon extends Figure2D {
  constructor(lineColor, fillColor, ...points) {
    const centerPoint = Point.getMiddlePoint(...points);
    super(lineColor, fillColor, centerPoint);
    this.points = points;
  }

  getPoints() {
    return this.points;
  }

  setPoints(points) {
    this.points = points;
  }

  move(newPoint) {
    console.log(newPoint, this.location());
    const deltaX = newPoint.x - this.location().x;
    const deltaY = newPoint.y - this.location().y;
    const newPoints = this.points.map(point => point.move(deltaX, deltaY));
    console.log(deltaX, deltaY);
    this.setCenter(newPoint);
    this.setPoints(newPoints);
    console.log(this);

    return this;
  }

  draw() {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    context.strokeStyle = this.getLineColor().toString();
    context.fillStyle = this.getFillColor().toString();
    context.beginPath();
    this.points.forEach((point, index) => {
      if (!index) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    });
    context.closePath();
    context.stroke();
    context.fill();
  }
}
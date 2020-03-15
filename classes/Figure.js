const LINE_WIDTH = 2;

window.Figure = class Figure {
  constructor(lineColor, center) {
    this.lineColor = lineColor;
    this.center = center;
    context.lineWidth = LINE_WIDTH;
    context.strokeStyle = this.getLineColor().toString();
  }

  draw() {};
  move() {};

  location() {
    return this.getCenter();
  };
  
  getCenter() {
    return this.center;
  };

  setCenter(newCenter) {
    this.center = newCenter;
  };

  getLineColor() {
    return this.lineColor;
  };

  setLineColor(newLineColor) {
    this.lineColor = newLineColor;
  };
}
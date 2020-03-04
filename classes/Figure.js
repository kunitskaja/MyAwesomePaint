window.Figure = class Figure {
  constructor(lineColor, center) {
    this.lineColor = lineColor;
    this.center = center;
    context.lineWidth = 3;
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
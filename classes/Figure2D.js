const Figure = window.Figure;

window.Figure2D = class Figure2D extends Figure {
  constructor(lineColor, fillColor, center) {
    super(lineColor, center);
    this.fillColor = fillColor;
  }

  getFillColor() {
    return this.fillColor;
  }

  setFillColor(newFillColor) {
    this.fillColor = newFillColor;
  }
}
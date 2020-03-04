window.Point = class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static copy(point) {
    return new Point(point.x, point.y);
  }

  set(newPoint) {
    this.x = newPoint.x;
    this.y = newPoint.y;
  }

  move(deltaX, deltaY) {
    this.x+=deltaX;
    this.y+=deltaY;

    return this;
  }

  static getMiddlePoint(...points) {
    const middlePointX = points.reduce((sum, point) => sum + point.x, 0) / points.length;
    const middlePointY = points.reduce((sum, point) => sum + point.y, 0) / points.length;

    return new Point(middlePointX, middlePointY);
  }

  static getDistance(firstPoint, secondPoint) {
    return Math.sqrt(Math.pow(firstPoint.x - secondPoint.x, 2) + Math.pow(firstPoint.y - secondPoint.y, 2))
  }
}
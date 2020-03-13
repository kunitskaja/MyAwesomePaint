window.Line = class Line extends Figure1D {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center);
        this.secondPoint = secondPoint;
    }

    static findAxisIntersections(firstPoint, secondPoint) {
        const deltaY = firstPoint.y - secondPoint.y;
        const deltaX = secondPoint.x - firstPoint.x;
        const temp = deltaY * (secondPoint.x) + deltaX * (secondPoint.y);

        if (deltaY === 0) {
          const y = firstPoint.y;
          
          if (deltaX > 0) {
            return {
              first: new Point(0, y),
              second: new Point(Number.MAX_SAFE_INTEGER, y),
            };
          } else {
            return {
              first: new Point(Number.MAX_SAFE_INTEGER, y),
              second: new Point(0, y),
            };
          }
        }

        if (deltaX === 0) {
          const x = firstPoint.x;

          if (deltaY > 0) {
            return {
              first: new Point(x, 0),
              second: new Point(x, Number.MAX_SAFE_INTEGER),
            };
          } else {
            return {
              first: new Point(x, Number.MAX_SAFE_INTEGER),
              second: new Point(x, 0),
            };
          }
        }

        const xAxisIntersectionPoint = new Point(temp / deltaY, 0);
        const yAxisIntersectionPoint = new Point(0, temp / deltaX);

        const firstPointToXAxisIntersectionPointDistance = Point.getDistance(firstPoint, xAxisIntersectionPoint);
        const secondPointToXAxisIntersectionPointDistance = Point.getDistance(secondPoint, xAxisIntersectionPoint);

        if (firstPointToXAxisIntersectionPointDistance > secondPointToXAxisIntersectionPointDistance) {
          return {
            first: yAxisIntersectionPoint,
            second: xAxisIntersectionPoint,
          }
        } else {
          return {
            first: xAxisIntersectionPoint,
            second: yAxisIntersectionPoint,
          }
        }
    };

    getSecondPoint() {
        return this.secondPoint;
    }

    setSecondPoint(newSecondPoint) {
        this.secondPoint = newSecondPoint;
    }

    move(newPoint) {
        const deltaX = newPoint.x - this.location().x;
        const deltaY = newPoint.y - this.location().y;
        this.setCenter(newPoint);
        const newSecondPoint = Point.copy(this.secondPoint);
        newSecondPoint.move(deltaX, deltaY);
        this.setSecondPoint(newSecondPoint);
        return this;
    }

    getDrawPoints(height, width) {
      const { first, second } = Line.findAxisIntersections(this.center, this.secondPoint);

      if (first.x >= 0 && first.y >= 0 && second.x >= 0 && second.y >= 0) {
        return {
          first,
          second,
        }
      }
      
      if (first.x < 0 || second.y < 0) {
        return this._getIntersectionsByFrame(first, second, height, width);
      } else {
        const { first: newSecond, second: newFirst } = this._getIntersectionsByFrame(second, first, height, width);

        return {
          first: newFirst,
          second: newSecond,
        }
      }
    }

    _getIntersectionsByFrame(lefterPoint, righterPoint, height, width) {
      const deltaX = righterPoint.x - lefterPoint.x;
      const deltaY = righterPoint.y - lefterPoint.y;

      const xByIntersectionByWidth = width;
      const yByIntersectionByWidth = (righterPoint.x * lefterPoint.y - lefterPoint.x * righterPoint.y + deltaY * xByIntersectionByWidth) / deltaX;

      if(yByIntersectionByWidth <= height) {
        return {
          first: righterPoint,
          second: new Point(xByIntersectionByWidth, yByIntersectionByWidth),
        };
      } else {
        const yByIntersectionByHeight = height;
        const xByIntersectionByHeight = (lefterPoint.x * righterPoint.y - righterPoint.x * lefterPoint.y + deltaX * yByIntersectionByHeight) / deltaY;

        return {
          first: righterPoint,
          second: new Point(xByIntersectionByHeight, yByIntersectionByHeight),
        };
      }
    }

    draw() {
      const canvas = document.querySelector('canvas');
      const context = canvas.getContext('2d');
      const { first, second } = this.getDrawPoints(canvas.height, canvas.width);
      context.strokeStyle = this.getLineColor().toString();

      console.log(first, second, context.strokeStyle);
      context.moveTo(first.x, first.y);
      context.lineTo(second.x, second.y);
      context.stroke();
    }
};

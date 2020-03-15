const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let lineColor = "#976afb";
let fillColor = "#d3c5f2";
const drawnFigures = [];
let clicks = [];

function onCanvasClick(event) {
    clicks.push(new Point(event.offsetX, event.offsetY));
    clicks.forEach(click => click.draw());
}

function watchLineColorPicker(event) {
    lineColor = event.target.value;
}

function watchFillColorPicker(event) {
    fillColor = event.target.value;
}

canvas.addEventListener("click", onCanvasClick, true);

lineColorPicker = document.getElementById("line");
lineColorPicker.addEventListener("change", watchLineColorPicker, false);

fillColorPicker = document.getElementById("fill");
fillColorPicker.addEventListener("change", watchFillColorPicker, false);

class Figure1DFabric {
  constructor() {
    this.FIGURE_TYPE_MAP = {
      Line,
      Ray,
      Segment,
      Polyline,
    };
  }

  get(type, lineColor, points) { 
    const figureClass = this.FIGURE_TYPE_MAP[type];

    if (!figureClass) {
      throw new Error('Figure type invalid');
    }

    return new figureClass(lineColor, ...points);
  }
}

class Figure2DFabric {
  constructor() {
    this.FIGURE_TYPE_MAP = {
      Ellipse,
      Circle,
      Polygon,
      Rectangle,
      Triangle,
      Rhombus,
    };
  }

  get(type, lineColor, fillColor, points) { 
    const figureClass = this.FIGURE_TYPE_MAP[type];

    if (!figureClass) {
      throw new Error('Figure type invalid');
    }

    return new figureClass(lineColor, fillColor, ...points);
  }
}

function redraw(figures) {
  context.clearRect(0,0, canvas.width, canvas.height);
  figures.forEach(figure => figure.draw());
}

function move() {
  const movePoint = clicks.pop();
  const figurePoint = clicks.pop();
  const closestFigure = drawnFigures.reduce((closestFigure, currentFigure) => {
    const currentClosestDistance = Point.getDistance(closestFigure.location(), figurePoint);
    const currentFigureDistance = Point.getDistance(currentFigure.location(), figurePoint)

    if (currentFigureDistance < currentClosestDistance) {
      return currentFigure;
    }
    return closestFigure;
  });

  const newFigures = drawnFigures.filter(figure => figure !== closestFigure);
  newFigures.push(closestFigure.move(movePoint));

  redraw(newFigures);
}

function postDraw(newFigure) {
  clicks = [];
  drawnFigures.push(newFigure);
  redraw(drawnFigures);
}

const figure1DFabric = new Figure1DFabric();
const figure2DFabric = new Figure2DFabric();

function drawFigure1D(event) {
  const type = event.target.id;
  const figure1D = figure1DFabric.get(type, lineColor, clicks);
  figure1D.draw();
  postDraw(figure1D);
}

function drawFigure2D(event) {
  const type = event.target.id;
  const figure2D = figure2DFabric.get(type, lineColor, fillColor, clicks);
  figure2D.draw();
  postDraw(figure2D);
}

function drawRegularPolygon(event) {
  const sidesNumber = prompt("Please enter sides number:", 42);
  const regularPolygon = new RegularPolygon(lineColor, fillColor, +sidesNumber, ...clicks);
  regularPolygon.draw();
  postDraw(regularPolygon);
}
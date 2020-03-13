const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let lineColor;
let clicks = [];

const pointsNumber = new Map([
        ['Line', 2],
        ['Ray', 2],
        ['Segment', 2],

        ['Ellipse', 2],
        ['Circle', 2],

        ['Triangle', 3],
        ['Rectangle', 2],
        ['Regular polygon', 2],
    ]
);

let currentFigure;
let fillColor;

// const figureSelector = document.getElementById("figureSelector");
// figureSelector.addEventListener("click", onFigureSelect, false);
// function onFigureSelect(event) {
//     currentFigure = event.target.value;
// }

function watchLineColorPicker(event) {
    lineColor = event.target.value;
    const l = new Ray(lineColor, new Point(100, 100), new Point(300, 150));
    l.draw();
    const l2 = new Ray(lineColor, new Point(100, 100), new Point(150, 300));
    l2.draw();

}

function watchFillColorPicker(event) {
    fillColor = event.target.value;

}

lineColorPicker = document.getElementById("line");
lineColorPicker.addEventListener("change", watchLineColorPicker, false);

fillColorPicker = document.getElementById("fill");
fillColorPicker.addEventListener("change", watchFillColorPicker, false);

const points = [new Point(30, 0), new Point(60, 30), new Point(50, 60), new Point(10, 60), new Point(0, 30)];

// console.log(points);
// const a = new Polygon(new Color(250, 40, 40), new Color(20, 240, 40), points);
//
// a.move(new Point(300, 200));
// a.draw();

// const points2 = [new Point(310, 0), new Point(60, 230), new Point(510, 602), new Point(110, 60), new Point(20, 310)];
// const b = new Rhombus(new Color(20, 140, 40), new Color(20, 40, 210), new Point(310, 0), new Point(60, 230));
// b.move(new Point(150, 150));
// b.move(new Point(350, 350));
// b.draw();

// const b = new Circle(new Color(20, 140, 40), new Color(20, 140, 40), new Point(50, 50), new Point(70, 150));
// b.move(new Point(150, 150));
// b.draw();

// const l = new Line(lineColor, new Point(100, 100), new Point(300, 150));
// l.draw();


// const z = new Segment(new Color(20, 140, 40), new Point(100, 100), new Point(300, 500));
// const x = new Segment(new Color(20, 140, 40), new Point(300, 500), new Point(850, 600));
// b.draw();
// b.move(new Point(900, 100));
// b.draw();

// const b = new Polyline(new Color(20, 140, 40), [x, z]);
// b.draw();
// b.move(new Point(600, 300));
// b.draw();

function drawLine() {
    canvas.addEventListener("click", onCanvasClick, false);
    function onCanvasClick(event) {
        clicks.push(new Point(event.offsetX, event.offsetY));
        console.log(clicks);
        clicks.forEach(click => click.draw());
        if (clicks.length === 2) {
            const line = new Line(new Color('#202020'), clicks[clicks.length - 2], clicks[clicks.length - 1]);
            line.draw();
            clicks.pop();
            clicks.pop();
        }
    }
}

function drawRay() {
    canvas.addEventListener("click", onCanvasClick, false);
    function onCanvasClick(event) {
        clicks.push(new Point(event.offsetX, event.offsetY));
        console.log(clicks);
        clicks.forEach(click => click.draw());
        if (clicks.length === 2) {
            const ray = new Ray(new Color('#202020'), clicks[clicks.length - 2], clicks[clicks.length - 1]);
            ray.draw();
            clicks.pop();
            clicks.pop();
        }
    }
}
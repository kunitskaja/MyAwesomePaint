
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const points = [new Point(30, 0), new Point(60, 30), new Point(50, 60), new Point(10, 60), new Point(0, 30)];

// console.log(points);
// const a = new Polygon(new Color(250, 40, 40), new Color(20, 240, 40), points);
//
// a.move(new Point(300, 200));
// a.draw();

const points2 = [new Point(310, 0), new Point(60, 230), new Point(510, 602), new Point(110, 60), new Point(20, 310)];
const b = new Rhombus(new Color(20, 140, 40), new Color(20, 40, 210), new Point(310, 0), new Point(60, 230));
b.move(new Point(150, 150));
b.move(new Point(350, 350));
b.draw();

// const b = new Circle(new Color(20, 140, 40), new Color(20, 140, 40), new Point(50, 50), new Point(70, 150));
// b.move(new Point(150, 150));
// b.draw();

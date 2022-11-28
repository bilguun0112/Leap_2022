var path = new Path();
var topLeft = new Point(5, 5);
var rectSize = new Size(200, 100);
var rect = new Rectangle(topLeft, rectSize);
var path = new Path.Rectangle(rect, 4); 
path.fillColor = 'red';

console.log(rect);
console.log(rect.point);
console.log(rect.size);
rect.strokeColor = 'red';
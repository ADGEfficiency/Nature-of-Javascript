var w = 512
var h = 128

class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(rhs) {
		this.x = this.x + rhs.x;
		this.y = this.y + rhs.y;
	}
}

const loc = new Vector(64, 64);
const speed = new Vector(2.0, 2.0);
const accel = new Vector(0.1, 0.1);

var svg = d3.select("body").append("svg")
	.attr("width", w)
	.attr("height", h);


var delayInMilliseconds = 50;
var iters = 20000;
var i = 1;

function bouncing () {
	setTimeout(function () {
	// move ball
	speed.add(accel)
	loc.add(speed)

	// check bouncing
	if ((loc.x > w) || (loc.x < 0)) {
		speed.x *= -1
	}
	if ((loc.y > h) || (loc.y < 0)) {
		speed.y *= -1
	}

	// draw elipse - TODO how to delay this
	var pt = svg.append("ellipse")
		.attr("cx", loc.x)
		.attr("cy", loc.y)
		.attr("rx", 2)
		.attr("ry", 2)
		.attr("fill", "black")
		.attr("stroke", "black")
		.attr("fill-opacity", i/iters)
		.attr("stroke-width", 0.1);
		
		i++;
		if (i < iters) {
			bouncing();
		}
	}, delayInMilliseconds)
}

bouncing();

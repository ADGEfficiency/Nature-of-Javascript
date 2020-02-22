var w = 512
var h = 128

class Walker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	display(svg) {
		var pt = d3.select("svg").append("circle")
			.attr("cx", this.x * w)
			.attr("cy", this.y * h)
			.attr("r", 3)
			.attr("fill", "white")
			.attr("stroke", "black")
			.attr("stroke-width", 0.1);
			}

	step(time) {
		const x_choice = perlin(this.x+Math.random(), this.y, time)
		const y_choice = perlin(this.x, this.y+Math.random(), time)
		this.x+=x_choice;
		this.y+=y_choice;
	}
}

function perlin(x, y, time){
	return noise.perlin3(x, y, time) * 0.1
}

var svg = d3.select("body").append("svg")
	.attr("width", w)
	.attr("height", h);

const walk = new Walker(0.5, 0.5);

var i;
for (i = 0; i < 1000; i++) {
	walk.step(i);
	walk.display(svg);
}

var w = 512;
var h = 128;

var accelsvg = d3.select("body").append("svg")
	.attr("id", "accel")
	.attr("width", w)
	.attr("height", h)
	.on('mousemove', function() {
      console.log( d3.event.pageX, d3.event.pageY ); 
});



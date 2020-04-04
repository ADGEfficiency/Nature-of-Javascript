class Vector {
	// see 1.4 for more methods
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(rhs) {
		this.x = this.x + rhs.x;
		this.y = this.y + rhs.y;
	}

	static static_add(v1, v2) {
		var v3 = new Vector(v1.x + v2.x, v1.y + v2.y);
		return v3;
	}
}

const v = new Vector(1, 2);
const u = new Vector(2, 2);
var wv = Vector.static_add(v, u);

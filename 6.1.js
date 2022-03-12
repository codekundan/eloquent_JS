class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    plus(vec2) {
        return new Vec(this.x + vec2.x, this.y + vec2.y);
    }
    minus(vec3) {
        return new Vec(this.x - vec3.x, this.y - vec3.y);
    }
    get length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}

console.log(new Vec(1,2).plus(new Vec(3,4)))
console.log(new Vec(1,2).minus(new Vec(3,4)))
console.log(new Vec(3,4).length());  /* The parenthesis in length() works if no "get" keyword infront of length()*/
console.log(new Vec(3,4).length); /* length works without () when "get" is used infront of length() */
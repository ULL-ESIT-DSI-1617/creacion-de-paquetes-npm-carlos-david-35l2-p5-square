"use strict"

var Shapes = require('@ull-carlos-david/ull-shape')

class Square extends Shapes {
    constructor(options) {
      Shapes.Shapes.Square = Square;
      super("Square", options)
      this.width = options.width;
    }
    getArea() {
      return Math.pow(this.width,2);
    }
}

module.exports = Square;

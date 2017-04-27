'use strict'

let Square = require("../lib/square.js");
let Shapes = require('@ull-carlos-david/ull-shape')

describe("getArea Square", function() {
  it("Se calcula el area del cuadrado correctamete", function() {
    let a = new Square({ width: 10 });
    let result = a.getArea();
     result.should.equal(100);
  })
});

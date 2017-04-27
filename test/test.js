'use strict'

let Square = require("../lib/square.js");

describe("getArea Square", function() {
  it("must compute the square area correctly", function() {
    let a = new Square({ width: 10 });
    let result = a.getArea();
     result.should.equal(100);
  })
});

"use strict"


/**
* Creación de paquete npm - Square
*
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-carlos-david-35l2-p5-square
*
* Equipo: carlos-david
*
* Creación de un paquete npm con el código de la clase "Square".
*
* Clase hija de Shapes
*/

let Shapes = require('@ull-carlos-david/ull-shape')

class Square extends Shapes {
    constructor(options) {
      Shapes.Shapes.Square = Square;
      super(options)
      this.width = options.width;
    }
    /**
    * La función getArea calcula el área de las figuras geometricas
    * @return {} retorna el área de la figura
    */
    getArea() {
      return Math.pow(this.width,2);
    }
}

module.exports = Square;

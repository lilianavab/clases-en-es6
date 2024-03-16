"use strict";

var _Cliente = require("./Cliente.js");
var _Impuestos = require("./Impuestos.js");
// Importamos las clases Cliente e Impuestos

// Creamos una instancia de Impuestos y el cliente
var impuestosCliente = new _Impuestos.Impuestos(5000000, 250000);
var cliente1 = new _Cliente.Cliente('Alejandro González', impuestosCliente);

// Mostramos en consola el nombre del cliente y el monto a pagar de impuestos,utilizando el método calcularImpuestos
console.log("Nombre del cliente: ".concat(cliente1.nombre));
console.log("Monto a pagar de impuestos: ".concat(cliente1.calcularImpuestos()));
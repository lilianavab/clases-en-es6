// Importamos las clases Cliente e Impuestos
import { Cliente } from './Cliente.js';
import { Impuestos } from './Impuestos.js';

// Creamos una instancia de Impuestos y el cliente
let impuestosCliente = new Impuestos(5000000, 250000);
let cliente1 = new Cliente('Alejandro González', impuestosCliente);

// Mostramos en consola el nombre del cliente y el monto a pagar de impuestos,utilizando el método calcularImpuestos
console.log(`Nombre del cliente: ${cliente1.nombre}`);
console.log(`Monto a pagar de impuestos: ${cliente1.calcularImpuestos()}`);

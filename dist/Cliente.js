"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Clase Cliente para ser exportada
var Cliente = exports.Cliente = /*#__PURE__*/function () {
  // Constructor de la clase Cliente
  function Cliente(nombre, impuestos) {
    _classCallCheck(this, Cliente);
    this.nombre = nombre;
    this.impuestos = impuestos;
  }

  // Getter para obtener el nombre
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    }

    // Setter para asignar un nuevo nombre
    ,
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }

    // Getter para obtener los impuestos
  }, {
    key: "impuestos",
    get: function get() {
      return this._impuestos;
    }

    // Setter para asignar nuevos impuestos
    ,
    set: function set(nuevo_impuestos) {
      this._impuestos = nuevo_impuestos;
    }

    // Método para calcular los impuestos
  }, {
    key: "calcularImpuestos",
    value: function calcularImpuestos() {
      return (this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21;
    }
  }]);
  return Cliente;
}();
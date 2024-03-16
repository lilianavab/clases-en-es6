// Clase Cliente para ser exportada
export class Cliente {
    // Constructor de la clase Cliente
    constructor(nombre, impuestos){
        this.nombre = nombre;
        this.impuestos = impuestos;
    }

    // Getter para obtener el nombre
    get nombre(){
        return this._nombre;
    }

    // Setter para asignar un nuevo nombre
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    // Getter para obtener los impuestos
    get impuestos(){
        return this._impuestos;
    }

    // Setter para asignar nuevos impuestos
    set impuestos(nuevo_impuestos){
        this._impuestos = nuevo_impuestos;
    }

    // Método para calcular los impuestos
    calcularImpuestos(){
        return (this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21;
    }
}


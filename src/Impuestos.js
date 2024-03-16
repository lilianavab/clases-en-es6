// Clase Impuestos para ser exportada
export class Impuestos {
    // Constructor de la clase Impuestos
    constructor(montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    // Getter para obtener el monto bruto anual
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }

    // Setter para asignar un nuevo monto bruto anual
    set montoBrutoAnual(nuevo_montoBrutoAnual){
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }

    // Getter para obtener las deducciones
    get deducciones(){
        return this._deducciones;
    }

    // Setter para asignar nuevas deducciones
    set deducciones(nuevo_deducciones){
        this._deducciones = nuevo_deducciones;
    }
}

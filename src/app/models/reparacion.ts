export class Reparaciones {
    _codReparacion: number;
    _nombreReparacion: string;
    _CosteBase: number;

    constructor(codigo:number, nombre: string, coste: number){
        this._codReparacion = codigo;
        this._nombreReparacion = nombre;
        this._CosteBase = coste;
    }

}

export type tReparaciones = {
    codigo: number;
    nombre: string;
    coste: number;
  };

  export type modReparaciones = {
    nombre: string;
    coste: number;
  };
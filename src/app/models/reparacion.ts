export class Reparacion{
    _idReparacion: number;
    NombreReparacion: string;
    CosteBase: number;

    constructor(idReparacion:number ,NombreReparacion: string, CosteBase: number){
        this._idReparacion = idReparacion;
        this.NombreReparacion = NombreReparacion;
        this.CosteBase = CosteBase;
    }

}
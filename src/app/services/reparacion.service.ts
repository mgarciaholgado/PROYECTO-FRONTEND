import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reparaciones, tReparaciones} from '../models/reparacion';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getReparaciones(): Observable<any>{
    return this.http.get(this.url + '/verReparacion')
  }

  eliminarReparaciones(codReparacion: string): Observable<any>{
    return this.http.delete(this.url + '/deleteReparacion/' + codReparacion);
  }

  crearReparaciones(reparacion: tReparaciones): Observable<any>{
    console.log(reparacion)
    return this.http.post(this.url + '/addReparacion', reparacion);
  }

  editReparacion(code:number, reparacion:any):Observable<any>{
    return this.http.put(this.url + '/updateReparacion/' + code,reparacion)
  }
  
}

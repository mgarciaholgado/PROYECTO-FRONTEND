import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reparaciones } from '../models/reparacion';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getReparaciones(): Observable<any>{
    return this.http.get(this.url + '/verReparacion')
  }

  eliminarReparaciones(nombre: string): Observable<any>{
    return this.http.delete(this.url + '/deleteReparacion/' + nombre);
  }

  crearReparaciones(reparacion: Reparaciones): Observable<any>{
    return this.http.post(this.url + '/addReparacion', reparacion);
  }
}

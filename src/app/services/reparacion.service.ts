import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparacionService {
  url = 'localhost:3000/verReparacion';
  constructor(private http: HttpClient) { }

  getReparaciones(): Observable<any>{
    return this.http.get(this.url)
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-listar-reparacion',
  templateUrl: './listar-reparacion.component.html',
  styleUrls: ['./listar-reparacion.component.css']
})
export class ListarReparacionComponent implements OnInit {
  constructor(private _reparacionesService: ReparacionService) { 

  } 
  ngOnInit(): void {
    this.obtenerReparaciones();
  }
  obtenerReparaciones(){
    this._reparacionesService.getReparaciones().subscribe(data => {
      console.log(data)
    })
  }
}

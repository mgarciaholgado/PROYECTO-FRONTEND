import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-reparacion',
  templateUrl: './crear-reparacion.component.html',
  styleUrls: ['./crear-reparacion.component.css']
})
export class CrearReparacionComponent implements OnInit {
  reparacionForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reparacionForm = this.fb.group({
      
    })
   }

  ngOnInit(): void {
  }
  crearReparacion(){

  }

}

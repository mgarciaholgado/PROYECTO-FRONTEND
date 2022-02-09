import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reparacion } from 'src/app/models/reparacion';

@Component({
  selector: 'app-crear-reparacion',
  templateUrl: './crear-reparacion.component.html',
  styleUrls: ['./crear-reparacion.component.css']
})
export class CrearReparacionComponent implements OnInit {
  reparacionForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.reparacionForm = this.fb.group({
      nombre: ['', Validators.required],
      coste: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  crearReparacion(){
    const REPARACION: Reparacion = {
      _nombreReparacion: this.reparacionForm.get('nombre')?.value,
      _CosteBase: this.reparacionForm.get('coste')?.value
    }
    console.log(REPARACION);
    this.router.navigate(['/']);
  }
}

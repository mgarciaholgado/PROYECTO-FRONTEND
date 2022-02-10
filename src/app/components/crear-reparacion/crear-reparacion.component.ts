import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reparaciones } from 'src/app/models/reparacion';
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-crear-reparacion',
  templateUrl: './crear-reparacion.component.html',
  styleUrls: ['./crear-reparacion.component.css']
})
export class CrearReparacionComponent implements OnInit {
  reparacionForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private _reparacionesService: ReparacionService) {
    this.reparacionForm = this.fb.group({
      nombre: ['', Validators.required],
      coste: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  crearReparacion(){
    const REPARACION: Reparaciones = {
      _nombreReparacion: this.reparacionForm.get('nombre')?.value,
      _CosteBase: this.reparacionForm.get('coste')?.value
    }
    this._reparacionesService.crearReparaciones(REPARACION).subscribe(data =>{
    this.router.navigate(['/']);
    })
  }
}

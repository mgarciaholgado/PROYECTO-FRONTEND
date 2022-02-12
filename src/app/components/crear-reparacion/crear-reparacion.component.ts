import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reparaciones, tReparaciones } from 'src/app/models/reparacion';
import { ReparacionService } from 'src/app/services/reparacion.service';

@Component({
  selector: 'app-crear-reparacion',
  templateUrl: './crear-reparacion.component.html',
  styleUrls: ['./crear-reparacion.component.css'],
})
export class CrearReparacionComponent implements OnInit {
  reparacionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _reparacionesService: ReparacionService
  ) {
    this.reparacionForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      coste: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  crearReparacion() {
    const REPARACION: tReparaciones = {
      codigo: this.reparacionForm.get('codigo')?.value,
      nombre: this.reparacionForm.get('nombre')?.value,
      coste: this.reparacionForm.get('coste')?.value,
    };
    this._reparacionesService
      .crearReparaciones(REPARACION)
      .subscribe((data) => {
        console.log(REPARACION);
        console.log(data);
        this.router.navigate(['/']);
      });
  }
}

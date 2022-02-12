import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReparacionService } from 'src/app/services/reparacion.service';
import { tReparaciones } from 'src/app/models/reparacion';

@Component({
  selector: 'app-editar-reparacion',
  templateUrl: './editar-reparacion.component.html',
  styleUrls: ['./editar-reparacion.component.css'],
})
export class EditarReparacionComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _reparacionesService: ReparacionService
  ) {
    this.editForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      coste: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  editarReparacion() {
    /*const reparacion: tReparaciones = {
      nombre: this.editForm.get('nombre')?.value,
      coste: this.editForm.get('coste')?.value,
    };
    this._reparacionesService
      .editReparacion(this.codigo, reparacion)
      .subscribe((data) => {
        this.router.navigate(['/']);
      });*/
  }
}

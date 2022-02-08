import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';

const routes: Routes = [
  { path: '', component: ListarReparacionComponent },
  { path: 'crear-reparacion', component: CrearReparacionComponent },
  { path: 'editar-reparacion/:id', component: CrearReparacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

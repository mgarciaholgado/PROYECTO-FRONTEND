import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { CrearReparacionComponent } from './components/crear-reparacion/crear-reparacion.component';
import { ListarReparacionComponent } from './components/listar-reparacion/listar-reparacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearReparacionComponent,
    ListarReparacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

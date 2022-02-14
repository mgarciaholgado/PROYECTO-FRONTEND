import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarVehiculosComponent } from '../listar-vehiculos/listar-vehiculos.component';
const routes = [
    { path: '', component: DashboardComponent, children: [
            { path: '', component: ListarVehiculosComponent },
            //{ path: '/editar-vehiculo', component: CrearVehiculosComponent },
            { path: '/ver-graficos', component: InicioComponent },
        ] },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map
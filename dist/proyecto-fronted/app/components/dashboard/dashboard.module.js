import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        declarations: [DashboardComponent, InicioComponent, NavbarComponent],
        imports: [
            CommonModule,
            DashboardRoutingModule,
            SharedModule
        ]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map
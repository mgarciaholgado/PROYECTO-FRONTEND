import { TestBed } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
describe('VehiculosService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(VehiculosService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=vehiculos.service.spec.js.map
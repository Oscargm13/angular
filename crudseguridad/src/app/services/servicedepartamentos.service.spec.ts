import { TestBed } from '@angular/core/testing';

import { ServicedepartamentosService } from './servicedepartamentos.service';

describe('ServicedepartamentosService', () => {
  let service: ServicedepartamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicedepartamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

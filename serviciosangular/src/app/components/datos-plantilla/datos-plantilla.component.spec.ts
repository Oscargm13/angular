import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPlantillaComponent } from './datos-plantilla.component';

describe('DatosPlantillaComponent', () => {
  let component: DatosPlantillaComponent;
  let fixture: ComponentFixture<DatosPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatosPlantillaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

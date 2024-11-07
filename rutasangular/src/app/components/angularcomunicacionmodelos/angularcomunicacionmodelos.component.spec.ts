import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcomunicacionmodelosComponent } from './angularcomunicacionmodelos.component';

describe('AngularcomunicacionmodelosComponent', () => {
  let component: AngularcomunicacionmodelosComponent;
  let fixture: ComponentFixture<AngularcomunicacionmodelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularcomunicacionmodelosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularcomunicacionmodelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

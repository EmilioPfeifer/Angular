import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTerminoComponent } from './buscar-termino.component';

describe('BuscarTerminoComponent', () => {
  let component: BuscarTerminoComponent;
  let fixture: ComponentFixture<BuscarTerminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTerminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTerminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

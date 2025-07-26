import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductoAgregado } from './modal-producto-agregado';

describe('ModalProductoAgregado', () => {
  let component: ModalProductoAgregado;
  let fixture: ComponentFixture<ModalProductoAgregado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductoAgregado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProductoAgregado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

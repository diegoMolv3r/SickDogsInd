import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleProducto } from './modal-detalle-producto';

describe('ModalDetalleProducto', () => {
  let component: ModalDetalleProducto;
  let fixture: ComponentFixture<ModalDetalleProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetalleProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalleProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

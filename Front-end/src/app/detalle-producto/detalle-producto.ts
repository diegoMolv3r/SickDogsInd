import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-detalle-producto',
  imports: [CommonModule],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class ModalDetalleProducto implements OnChanges {
  @Input() producto: any;
  @Output() cerrar = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['producto']) {
      if (this.producto) {
        this.bloquearScroll();
      } else {
        this.desbloquearScroll();
      }
    }
  }

  bloquearScroll() {
    document.body.style.overflow = 'hidden';
  }

  desbloquearScroll() {
    document.body.style.overflow = 'auto';
  }

  cerrarModal() {
    this.desbloquearScroll();
    this.cerrar.emit();
  }

  seleccionarImagen(url: string) {
    if (this.producto) {
      this.producto.imagenSeleccionada = url;
    }
  }

  obtenerTodasLasImagenes() {
    if (this.producto) {
      return [this.producto.imagen, ...this.producto.imagenesAdicionales];
    }
    return [];
  }
}

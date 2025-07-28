import { Component, Input, Output, EventEmitter } from '@angular/core';


// Interfaz para definir la estructura de un producto
export interface Producto {
  nombre: string;
  descripcion: string;
  descripcionDetallada: string;
  precio: number;
  imagen: string;
  imagenesAdicionales: string[];
  categoria: string;
  talles: string[];
}

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard { 
  @Input() producto: any;
  @Output() verDetalle = new EventEmitter<Producto>();

  mostrarDetalle() {
    this.verDetalle.emit(this.producto);
  }

  // agregarAlCarrito(event: Event) {
  //   event.stopPropagation();
  //   console.log('Agregado al carrito:', this.producto.nombre);
  // }
}

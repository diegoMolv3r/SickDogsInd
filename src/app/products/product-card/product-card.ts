import { Component, Input } from '@angular/core';
import { ProductsContainer } from '../products-container/products-container'; 

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
export class ProductCard { @Input() producto!: Producto; }

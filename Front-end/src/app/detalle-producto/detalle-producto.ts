import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService, Producto } from '../services/products.service';

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProductoComponent implements OnInit {
  producto?: Producto;
  imagenSeleccionada: string = '';
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const nombre = params.get('id');
      if (nombre) {
        this.producto = this.productsService.getProductByName(nombre);
        if (this.producto) {
          this.imagenSeleccionada = this.producto.imagen;
        }
      }
    });
  }

  seleccionarImagen(url: string) {
    this.imagenSeleccionada = url;
  }

  obtenerTodasLasImagenes() {
    if (this.producto) {
      return [this.producto.imagen, ...this.producto.imagenesAdicionales];
    }
    return [];
  }
}

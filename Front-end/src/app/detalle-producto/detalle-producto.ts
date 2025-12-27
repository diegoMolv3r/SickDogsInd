import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService, Producto } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProductoComponent implements OnInit {
  producto?: Producto;
  imagenSeleccionada: string = '';
  talleSeleccionado: string = '';
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);
  agregadoAlCarrito = false;

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

  seleccionarTalle(talle: string) {
    this.talleSeleccionado = talle;
  }

  agregarAlCarrito() {
    if (this.producto && this.talleSeleccionado) {
      this.cartService.addToCart(this.producto, this.talleSeleccionado);
      this.agregadoAlCarrito = true;
      setTimeout(() => {
        this.agregadoAlCarrito = false;
      }, 2000);
    }
  }

  obtenerTodasLasImagenes() {
    if (this.producto) {
      return [this.producto.imagen, ...this.producto.imagenesAdicionales];
    }
    return [];
  }
}

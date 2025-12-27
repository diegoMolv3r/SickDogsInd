import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() producto!: Producto;
}

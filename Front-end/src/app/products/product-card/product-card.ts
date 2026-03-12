import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Producto } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() producto!: Producto;
}

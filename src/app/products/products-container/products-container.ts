import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products-container',
  imports: [ProductCard],
  templateUrl: './products-container.html',
  styleUrl: './products-container.css'
})
export class ProductsContainer {
    
}

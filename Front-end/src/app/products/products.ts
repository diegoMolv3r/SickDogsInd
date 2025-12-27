import { Component } from '@angular/core';
import { ProductsContainer } from './products-container/products-container';

@Component({
  selector: 'app-products',
  imports: [ProductsContainer],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {

}

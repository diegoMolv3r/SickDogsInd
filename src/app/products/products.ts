import { Component } from '@angular/core';
import { Filter } from './filter/filter'; 
import { ProductsContainer } from './products-container/products-container';

@Component({
  selector: 'app-products',
  imports: [Filter, ProductsContainer],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {

}

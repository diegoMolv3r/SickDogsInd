import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { ProductsContainerComponent } from './products-container/products-container.component';

@Component({
  selector: 'app-products',
  imports: [FilterComponent, ProductsContainerComponent],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}

import { Component, OnInit, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { ProductsService, Producto } from '../../services/products.service';

@Component({
    selector: 'app-products-container',
    imports: [CommonModule, ProductCard],
    templateUrl: './products-container.html',
    styleUrl: './products-container.css'
})
export class ProductsContainer implements OnInit {
    productos: Producto[] = [];
    private productsService = inject(ProductsService);

    ngOnInit() {
        this.productos = this.productsService.getProducts();
    }
}

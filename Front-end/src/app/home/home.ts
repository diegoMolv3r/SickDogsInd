import { Component } from '@angular/core';
import { Hero } from "../hero/hero";
import { About } from "../about/about";
import { Products } from "../products/products";

@Component({
    selector: 'app-home',
    imports: [Hero, About, Products],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class HomeComponent { }

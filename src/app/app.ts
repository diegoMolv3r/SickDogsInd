import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Products } from "./products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SickDogsApp');
}

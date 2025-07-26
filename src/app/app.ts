import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./hero/hero";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SickDogsApp');
}

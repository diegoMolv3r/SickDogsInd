import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {

  ngOnInit() {
    // Smooth scroll para el enlace de productos
    const productLink = document.querySelector('a[href="#productos"]');
    if (productLink) {
      productLink.addEventListener('click', (e) => {
        e.preventDefault();
        const productosSection = document.getElementById('productos');
        if (productosSection) {
          productosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }
}

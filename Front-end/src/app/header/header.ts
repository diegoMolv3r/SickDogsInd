import { Component, OnInit, OnDestroy, inject, ViewChild, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CartModalComponent } from '../cart-modal/cart-modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, CartModalComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  cartService = inject(CartService);
  cartItemCount = 0;
  isMenuOpen = false;
  private cartSubscription?: Subscription;
  
  @ViewChild('cartModal') cartModalComponent?: CartModalComponent;

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItemCount = this.cartService.getTotalItems();
    });
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  openCart() {
    this.cartModalComponent?.openModal();
    this.closeMenu(); // Cerrar menú móvil si está abierto
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el menú está abierto
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize')
  onResize() {
    // Cerrar menú automáticamente en pantallas grandes
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}

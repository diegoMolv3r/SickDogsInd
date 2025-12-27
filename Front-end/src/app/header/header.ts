import { Component, OnInit, OnDestroy, inject, ViewChild } from '@angular/core';
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
  }
}

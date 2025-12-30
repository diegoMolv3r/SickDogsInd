import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-modal',
  imports: [CommonModule],
  templateUrl: './cart-modal.html',
  styleUrl: './cart-modal.css'
})
export class CartModalComponent implements OnInit, OnDestroy {
  cartService = inject(CartService);
  cartItems: CartItem[] = [];
  isOpen = false;
  private cartSubscription?: Subscription;
  showCopiedMessage = false;

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  openModal() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isOpen = false;
    document.body.style.overflow = '';
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }

  updateQuantity(index: number, cantidad: number) {
    this.cartService.updateQuantity(index, cantidad);
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  onBackdropClick(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }

  checkout() {
    const message = this.cartService.generateOrderMessage();

    navigator.clipboard.writeText(message).then(() => {
      
      this.showCopiedMessage = true;
      setTimeout(() => this.showCopiedMessage = false, 3000);

      this.openInstagram();

    }).catch(err => {
      console.error('Error al copiar: ', err);
      this.openInstagram();
    });
  }

  private openInstagram() {
    const igUser = 'sickdogs.ind'; 
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `instagram://user?username=${igUser}`;
      setTimeout(() => {
        window.open(`https://www.instagram.com/${igUser}/`, '_blank');
      }, 1000);
    } else {
      window.open(`https://ig.me/m/${igUser}`, '_blank');
    }
  }
}


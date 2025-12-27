import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './products.service';

export interface CartItem {
  producto: Producto;
  talle: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

  constructor() {
    // Cargar carrito del localStorage si existe
    this.loadCartFromStorage();
  }

  addToCart(producto: Producto, talle: string): void {
    const existingItem = this.cartItems.find(
      item => item.producto.nombre === producto.nombre && item.talle === talle
    );

    if (existingItem) {
      existingItem.cantidad += 1;
    } else {
      this.cartItems.push({
        producto,
        talle,
        cantidad: 1
      });
    }

    this.updateCart();
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateQuantity(index: number, cantidad: number): void {
    if (cantidad > 0) {
      this.cartItems[index].cantidad = cantidad;
      this.updateCart();
    } else {
      this.removeFromCart(index);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.cantidad, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + (item.producto.precio * item.cantidad),
      0
    );
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    this.saveCartToStorage();
  }

  private saveCartToStorage(): void {
    try {
      localStorage.setItem('sickdogs_cart', JSON.stringify(this.cartItems));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }

  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem('sickdogs_cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.updateCart();
      }
    } catch (error) {
      console.error('Error loading cart from storage:', error);
    }
  }
}


import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts:Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 200,
        image: 'https://picsum.photos/640/640?r=1',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=3',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 400,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 50,
        image: 'https://picsum.photos/640/640?r=5',
        creationAt: new Date().toString()
      },
      {
        id: Date.now(),
        title: 'Producto 6',
        price: 40,
        image: 'https://picsum.photos/640/640?r=6',
        creationAt: new Date().toString()
      }
    ]
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    console.log('estamos en el padre')
    this.cart.update(prevState => [...prevState, product])
  }
}

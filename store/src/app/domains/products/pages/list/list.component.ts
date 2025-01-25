import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<[]>([]);
  //cart = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  constructor() {
    /*
    const initProducts:Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 200,
        image: 'https://picsum.photos/640/640?r=1',
        creationAt: new Date().toString()
      }
    ]
    this.products.set(initProducts);
    */
    this.getProducts();
    this.getCategories()
  }

  addToCart(product: Product) {
    console.log('estamos en el padre')
    //this.cart.update(prevState => [...prevState, product])
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts()
    .subscribe({
     next: (products) => {
       this.products.set(products);
     },
     error: () => {
 
     }
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
     next: (categories) => {
      console.log(categories)
       this.categories.set(categories);
     },
     error: () => {
 
     }
    })
  }

}

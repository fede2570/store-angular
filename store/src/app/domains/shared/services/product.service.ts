import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getOne(id: string) {
    return this.http.get<Product>('https://fakestoreapi.com/products/' + id);
  }
}

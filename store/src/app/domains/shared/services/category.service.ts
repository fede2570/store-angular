import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  getAll() {
      return this.http.get<[]>('https://fakestoreapi.com/products/categories');
  }

  constructor() { }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {

  /*
  //Campos obligatorios
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';
  */

  @Input({required: true}) product!: Product;

  @Output() addToCard = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCard.emit(this.product);
  }
}

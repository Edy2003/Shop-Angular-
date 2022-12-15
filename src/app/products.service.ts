import { Injectable } from '@angular/core';
import {products} from "./products";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor() { }

  getProducts():Product[]{
    return products;
  }
}

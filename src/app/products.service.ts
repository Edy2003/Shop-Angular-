
import { Injectable } from '@angular/core';
import {products} from "./products";
import {Product} from "./product";
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private subject = new Subject<any>();
  popArr:any[] = [];

  constructor() { }

  getProducts():Product[]{
    return products;
  }
  getPopArr(){
    return this.popArr;
  }
  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}

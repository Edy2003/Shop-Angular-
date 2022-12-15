import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../products.service";
import {Product} from "../product";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: Product[] | undefined;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}

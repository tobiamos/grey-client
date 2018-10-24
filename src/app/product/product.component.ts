import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  filter: string;
  constructor(
    private product: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.product.getProducts().subscribe(res => {
      this.products = res['data'];
    });
  }

}

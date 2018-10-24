import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.product = {
        'id': '',
        'name': '',
        'description': '',
        'price': '',
        'category': '',
        'image': '',
        'color': '',
        'createdAt': '',
        'updatedAt': ''
    };
    this.getProduct();
  }
  getIdFromUrl() {
    const id = this.activeRoute.snapshot.params['id'];
    return id;
  }
  getProduct() {
    this.productService.getProduct(this.getIdFromUrl()).subscribe(res => {
        this.product = res['data'];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
 productForm: FormGroup;
    constructor(
      private fb: FormBuilder,
      private productService: ProductService,
      private router: Router,
    ) {
      this.createForm();
     }

  ngOnInit(

  ) {
  }
  createForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]],
      color: ['', [Validators.required]]
    });
  }
  onSubmit() {
    const data = this.productForm.value;
    console.log(data);
    return this.productService.addProduct(data).subscribe(
      response => {
        this.productForm.reset();
        this.router.navigate([`/product/${response['data']['id']}`]);
      },
      error => {
        console.error(error.error);
      }
    );
  }


}

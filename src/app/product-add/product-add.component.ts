import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

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
      },
      error => {
        console.error(error.error);
      }
    );
  }


}

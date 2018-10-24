import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
const BASEURL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${BASEURL}/products`);
  }
  getProduct(id) {
    return this.http.get(`${BASEURL}/products/${id}`);
  }
  addProduct(product) {
    return this.http.post(`${BASEURL}/products`, product);
  }
}

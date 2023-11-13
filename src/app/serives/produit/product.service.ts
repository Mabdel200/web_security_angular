import { Product } from './../../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/v1/product";

  constructor(private http: HttpClient) {

  }

  addProduct(product: Product){
    return this.http.post(`${this.baseUrl}/createProduct`, product);
  }

  getAllProducts(){
    return this.http.get(`${this.baseUrl}/`);
  }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}



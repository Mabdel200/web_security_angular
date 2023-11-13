import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = "http://localhost:8080/api/v1/order";

  constructor(private http: HttpClient) {

  }

  getAllOrder(){
    return this.http.get(`${this.baseUrl}/`);
  }

  getOrder(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}

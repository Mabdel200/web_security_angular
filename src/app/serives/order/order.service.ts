import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderRequest} from "../../models/order-request";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  addCommande(
    orderRequest: OrderRequest
  ) {
    return this.http.post(`${this.baseUrl}/addCommande`, orderRequest);
  }
  getCommandes(){
    return this.http.get(`${this.baseUrl}/findAllCommande`)
  }

}

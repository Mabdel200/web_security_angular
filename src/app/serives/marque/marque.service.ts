import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MarqueRequest} from "../../models/marque-request";

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  addMarque(
    marqueRequest: MarqueRequest
  ) {
    return this.http.post(`${this.baseUrl}/addMarque`, marqueRequest);
  }
  getMarques(){
    return this.http.get(`${this.baseUrl}/findAllMarque`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private baseUrl = 'http://localhost:8080/api/v1/brands'

  constructor(private http: HttpClient) { }

  getBrands(){
    return this.http.get(`${this.baseUrl}`)
  }
}

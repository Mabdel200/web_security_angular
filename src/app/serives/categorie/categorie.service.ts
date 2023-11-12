import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategorieRequest} from "../../models/categorie-request";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  addCategorie(categorieRequest: CategorieRequest) {
    return this.http.post(`${this.baseUrl}/addCategory`, categorieRequest);
  }

  getCategories(){
    return this.http.get(`${this.baseUrl}/findAllCategories`)
  }

  // getCategoryById( id: string ) {
  //   return this.http.get( `${this.baseUrl}/categories}/${id}` )
  // }
  //
  // updateCategory( id: string, data: any ) {
  //   return this.http.put(`${this.baseUrl}/categories}/${id}`,  data)
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryRequest } from 'src/app/models/category-request';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/v1/categories'

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories(){
    return this.http.get(`${this.baseUrl}`)
  }

}

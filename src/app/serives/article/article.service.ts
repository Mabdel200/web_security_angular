import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationResponse} from "../../models/authentication-response";
import {ArticleRequest} from "../../models/article-request";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  addArticle(
    articleRequest: ArticleRequest
  ) {
    return this.http.post(`${this.baseUrl}/addProduct`, articleRequest);
  }
  getArticles(){
    return this.http.get(`${this.baseUrl}/findAllProduct`)
  }
}

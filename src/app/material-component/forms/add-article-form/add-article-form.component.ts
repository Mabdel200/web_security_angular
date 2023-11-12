import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ThemePalette} from "@angular/material/core";

import {Router} from "@angular/router";
import {ArticleService} from "../../../serives/article/article.service";
import {ArticleRequest} from "../../../models/article-request";
import {DemoMaterialModule} from "../../../demo-material-module";
import {CommonModule, NgFor, NgIf} from "@angular/common";

import {CategorieService} from "../../../serives/categorie/categorie.service";
import {MarqueService} from "../../../serives/marque/marque.service";

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.scss']
})
export class AddArticleFormComponent implements OnInit{
  public categories: any
  public marques: any

  //Roles
  colorControl = new FormControl('primary' as ThemePalette);

  //Form validation
  articleRequest: ArticleRequest = {};
  message = '';

  //=========== begin ==============================
  constructor(
    private articleService: ArticleService,
    private categorieService: CategorieService, private marqueService: MarqueService,
    private router: Router) {}


  registerArticle() {
    this.message = '';
    this.articleService.addArticle(this.articleRequest)
      .subscribe(
        (data) => {
          // inform the user
          this.message = 'Article add successfully\nYou will be redirected to the List of All articles in 3 seconds';
          setTimeout(() => {
            this.router.navigate(['tabs']);
          }, 3000)
        }
      );

  }

  ngOnInit(): void {

    this.categorieService.getCategories().subscribe( (datas) =>{
      console.log(datas);
      this.categories =datas;
    });

    this.marqueService.getMarques().subscribe( (datas) =>{
      console.log(datas);
      this.marques =datas;
    });

  }

}

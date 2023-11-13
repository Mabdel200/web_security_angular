import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {ArticleRequest} from "../../../models/article-request";
import {ArticleService} from "../../../serives/article/article.service";
import {Router} from "@angular/router";
import {CategorieRequest} from "../../../models/categorie-request";
import {CategorieService} from "../../../serives/categorie/categorie.service";

@Component({
  selector: 'app-add-categorie-form',
  templateUrl: './add-categorie-form.component.html',
  styleUrls: ['./add-categorie-form.component.scss']
})
export class AddCategorieFormComponent {


  colorControl = new FormControl('primary' as ThemePalette);

  //Form validation
  categoryRequest: CategorieRequest = {};
  message = '';

  //=========== begin ==============================
  constructor(
    private categorieService: CategorieService,
    private router: Router) {}


  registerCategory() {
    this.message = '';
    this.categorieService.addCategorie(this.categoryRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            // this.authResponse = response;
          } else {
            // inform the user
            this.message = 'New Category save successfully\nYou will be redirected to the Order lIST page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['stepper']);
            }, 3000)
          }
        }
      });

  }
}

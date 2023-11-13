import {Component, OnInit} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule, NgFor, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {CategorieService} from "../../serives/categorie/categorie.service";
import {MarqueService} from "../../serives/marque/marque.service";
import {ArticleService} from "../../serives/article/article.service";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    NgIf, MatButtonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit{
  public products: any
  public categories: any
  public marques: any
  //=========== begin ==============================
  constructor(
    private articletService: ArticleService,
    private categorieService: CategorieService, private marqueService: MarqueService,
    private router: Router
  ) {
  }


  //Get all users.
  ngOnInit(): void {
    //Products
    this.articletService.getArticles().subscribe( (datas) =>{
      console.log(datas);
      this.products =datas;
    });

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

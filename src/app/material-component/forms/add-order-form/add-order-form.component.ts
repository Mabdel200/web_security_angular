import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";

import {Router} from "@angular/router";
import {VerificationRequest} from "../../../models/verification-request";
import {OrderRequest} from "../../../models/order-request";
import {OrderService} from "../../../serives/order/order.service";
import {ArticleService} from "../../../serives/article/article.service";

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.scss']
})
export class AddOrderFormComponent implements OnInit{
  public produits: any

  //Roles users
  colorControl = new FormControl('primary' as ThemePalette);

  //Form validation
  orderRequest: OrderRequest = {};
  message = '';

  //=========== begin ==============================
  constructor(
    private orderService: OrderService,
    private articleService: ArticleService,
    private router: Router
  ) {
  }


  registerOrder() {
    this.message = '';
    this.orderService.addCommande(this.orderRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            // this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Order save successfully\nYou will be redirected to the Order lIST page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['menu']);
            }, 3000)
          }
        }
      });

  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe( (datas) =>{
      console.log(datas);
      this.produits =datas;
    });
  }

}

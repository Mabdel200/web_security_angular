import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRequest } from 'src/app/models/product';
import { BrandService } from 'src/app/serives/brand/brand.service';
import { CategoryService } from 'src/app/serives/category/category.service';
import { ProductService } from 'src/app/serives/produit/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  public products: any
  public categories: any
  public marques: any

  productRequest: ProductRequest = {};
    message = "";

  constructor(
    private produitService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private router: Router
  ){

  }

  /* updateProduct()
    {
      this.message = "";
      this.produitService.updateProduct(this.productRequest, this.id)
        .subscribe((data) => {
          this.message = "Produit creer avec success",
          setTimeout(() => {
            this.router.navigate(["product"]);
          }, 3000);
        });
    } */


  ngOnInit(): void {

    /* this.produitService.updateProduct().subscribe */
  }

}

import { Component, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { ProductRequest } from 'src/app/models/product';
import { BrandService } from 'src/app/serives/brand/brand.service';
import { CategoryService } from 'src/app/serives/category/category.service';
import { ProductService } from 'src/app/serives/produit/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
    public categories: any;
    public marques: any;

    productRequest: ProductRequest = {};
    message = "";


  constructor(
    private produitService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    // Category
    // Marque
    private router: Router){}

    createProduct()
    {
      this.message = "";
      this.produitService.addProduct(this.productRequest)
        .subscribe((data) => {
          this.message = "Produit creer avec success",
          setTimeout(() => {
            this.router.navigate(["product"]);
          }, 3000);
        });
    }


  ngOnInit(): void {

    //Get category
    this.categoryService.getAllCategories().subscribe((datas) => {
      console.log(datas);
      this.categories = datas;
    });

    //Get brand
    this.brandService.getBrands().subscribe((datas) => {
      console.log(datas);
      this.marques = datas;
    });

  }

}

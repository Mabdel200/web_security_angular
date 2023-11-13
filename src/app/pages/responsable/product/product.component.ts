import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/serives/brand/brand.service';
import { CategoryService } from 'src/app/serives/category/category.service';
import { ProductService } from 'src/app/serives/produit/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  public products: any
  public categories: any
  public marques: any

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private router: Router
  ){

  }
  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((datas) => {
      console.log(datas);
      this.products =datas;
    });

    this.categoryService.getAllCategories().subscribe((datas) => {
      console.log(datas);
      this.categories =datas;
    });

    this.brandService.getBrands().subscribe((datas) => {
      console.log(datas);
      this.marques =datas;
    });


  }



}

import { Component, OnInit } from '@angular/core';import { Router } from '@angular/router';
import { ProductRequest } from 'src/app/models/product';
import { ProductService } from 'src/app/serives/produit/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
    /* public name: any;
    public description: any;
    public prix: any;
    public couleur: any;
    public marque: any;
    public categorie: any;
    public quantiteStock: any;
    // imageUrl: any[];
    public code: any;
    public status: any; */
    public product: any;
    public category: any;
    public marque: any;

    productRequest: ProductRequest = {};
    message = "";


  constructor(
    private produitService: ProductService,
    // Category
    // Marque
    private router: Router){}

    addProduct()
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
    this.produitService.getAllProducts().subscribe((datas) => {
      console.log(datas);
      this.product = datas;
    });

    //Get brand
    this.produitService.getAllProducts().subscribe((datas) => {
      console.log(datas);
      this.product = datas;
    });


  }

}

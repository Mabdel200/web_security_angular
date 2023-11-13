import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/serives/produit/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
    public name: any;
    public description: any;
    public prix: any;
    public couleur: any;
    public marque: any;
    public categorie: any;
    public quantiteStock: any;
    // imageUrl: any[];
    public code: any;
    public status: any;

  constructor(
    private produitService: ProductService,

  ){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

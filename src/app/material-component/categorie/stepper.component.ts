import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {Router} from "@angular/router";
import {CategorieService} from "../../serives/categorie/categorie.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule, DatePipe, NgFor, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MarqueService} from "../../serives/marque/marque.service";

@Component({
	selector: 'app-stepper',
	standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    NgIf, MatButtonModule
  ],
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
	providers: [{
		provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
	}]
})
export class StepperComponent implements OnInit {
  public categories: any
  public marques: any
  //=========== begin ==============================
  constructor(
    private categorieService: CategorieService, private marqueService: MarqueService,
    private router: Router
  ) {
  }


  //Get all users.
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

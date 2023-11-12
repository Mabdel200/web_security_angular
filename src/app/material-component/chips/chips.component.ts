import {Component, OnInit} from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";

export interface DemoColor {
  name: string;
  color: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [DemoMaterialModule, MatFormFieldModule, MatChipsModule, NgFor, MatIconModule],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit{
  public orders: any
  //=========== begin ==============================
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }


  //Get all users.
  ngOnInit(): void {
    this.authService.getUsers().subscribe( (datas) =>{
      console.log(datas);
      this.orders =datas;
    })
  }

}

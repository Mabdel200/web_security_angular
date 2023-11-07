import { CommonModule, DatePipe, NgFor } from '@angular/common';
import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ThemePalette} from "@angular/material/core";

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    DatePipe, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf
  ],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],

})

export class ListsComponent implements OnInit {

  //Control with form.
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  //Password
  hide = true;

  //Roles users
  colorControl = new FormControl('primary' as ThemePalette);

  //Table DataSet
  displayedColumns: string[] = ['position', 'name',  'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  //Form validation
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  public users: any
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
      this.users =datas;
    })
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the Welcome page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['dashboard']);
          }, 3000);
        }
      });
  }
}

export interface PeriodicElement {
  firstname: string;
  lastname: string;
  email: any;
  role: any;
  mfaEnabled: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Abdel', weight: 1.0079, symbol: 'Respo vente'},
//   {position: 2, name: 'Koiranga', weight: 4.0026, symbol: 'operateur'},
//   {position: 3, name: 'Alkali', weight: 6.941, symbol: 'revendeur'},
//   {position: 4, name: 'Ndjibe', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Newman', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'issa', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Djabba', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

import {Component, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {MatPaginator} from "@angular/material/paginator";
import {RegisterRequest} from "../../../models/register-request";
import {AuthenticationResponse} from "../../../models/authentication-response";
import {AuthenticationService} from "../../../serives/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../../models/verification-request";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
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


  //Form validation
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  //=========== begin ==============================
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
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
              this.router.navigate(['lists']);
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

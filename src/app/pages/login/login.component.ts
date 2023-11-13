import {Component, OnInit} from '@angular/core';
import {AuthenticationRequest} from "../../models/authentication-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {

  authRequest: AuthenticationRequest = {};
  otpCode = '';
  authResponse: AuthenticationResponse = {};

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;

          //Defined routes.
          if (!this.authResponse.mfaEnabled && this.authResponse.role == "ADMIN") {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['dashboard']);
          }

          //Defined routes.
          if (!this.authResponse.mfaEnabled && this.authResponse.role == "MANAGER") {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['responsable-cli']);
          }

          //Defined routes.
          if (!this.authResponse.mfaEnabled && this.authResponse.role == "USER") {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['revendeur']);
          }

        }
      });
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['dashboard']);
        }
      });
  }

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

import {Router} from "@angular/router";
import {MarqueRequest} from "../../../models/marque-request";
import {MarqueService} from "../../../serives/marque/marque.service";

@Component({
  selector: 'app-add-marque-form',
  templateUrl: './add-marque-form.component.html',
  styleUrls: ['./add-marque-form.component.scss']
})
export class AddMarqueFormComponent {



  //Form validation
  marqueRequest: MarqueRequest = {};
  message = '';

  //=========== begin ==============================
  constructor(
    private marqueService: MarqueService,
    private router: Router) {}


  registerMarque() {
    this.message = '';
    this.marqueService.addMarque(this.marqueRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            // this.authResponse = response;
          } else {
            // inform the user
            this.message = 'New Marque save successfully\nYou will be redirected to the Order lIST page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['stepper']);
            }, 3000)
          }
        }
      });

  }
}

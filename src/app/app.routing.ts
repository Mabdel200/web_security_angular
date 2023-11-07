import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {authGuard} from "./serives/auth/auth.guard";
import {FullCustomerComponent} from "./pages/customer/full-customer.component";
import {CustomerComponent} from "./pages/customer/customer.component";

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [authGuard]
  },

  {
    path: '',
    component: FullComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  // Route for Customers
  {
    path: '',
    component: FullCustomerComponent,
    children: [

      {
        path: 'customer',
        component: CustomerComponent,
      }
    ]
  }
];

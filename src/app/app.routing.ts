import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {authGuard} from "./serives/auth/auth.guard";
import {FullCustomerComponent} from "./pages/customer/full-customer.component";
import {CustomerComponent} from "./pages/customer/customer.component";

import { ResponsableComponent } from './pages/responsable/responsable.component';
import { FullResponsableComponent } from './pages/responsable/full-responsable.component';
import { AddProductComponent } from './pages/responsable/add-product/add-product.component';
import { ProductComponent } from './pages/responsable/product/product.component';
import { ProductDetailsComponent } from './pages/responsable/product-details/product-details.component';
import { OrderComponent } from './pages/responsable/order/order.component';
import { ProfileComponent } from './pages/responsable/profile/profile.component';
import { FullRevendeurComponent } from './pages/revendeur/full-revendeur.component';
import { RevendeurComponent } from './pages/revendeur/revendeur.component';

import { ProductComponent as RevendeurProduct } from './pages/revendeur/product/product.component';
import { ProductDetailsComponent as RevendeurDetailsProduct } from './pages/revendeur/product-details/product-details.component';

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
    // canActivate: [authGuard],
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
  },

  // Route for Responsable clientele
  {
    path: "",
    component: FullResponsableComponent,
    children: [

      {
        path: 'responsable-cli',
        component: ResponsableComponent,
      },
      {
        path: "product",
        component: ProductComponent
      },
      {
        path: "product-details",
        component: ProductDetailsComponent
      },
      {
        path: "add-product",
        component: AddProductComponent
      },
      {
        path: "order",
        component: OrderComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
    ]
  },

  // Route for revendeur
  {
    path: "",
    component: FullRevendeurComponent,
    children: [

      {
        path: 'revendeur',
        component: RevendeurComponent,
      },
      {
        path: "rev-product",
        component: RevendeurProduct
      },
      {
        path: "rev-product-details",
        component: RevendeurDetailsProduct
      },/* ,
      {
        path: "order",
        component: OrderComponent
      }, */
      {
        path: "re-profile",
        component: ProfileComponent
      },
    ]
  }
];

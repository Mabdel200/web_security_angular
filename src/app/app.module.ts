
import { BrowserModule } from '@angular/platform-browser';
// import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {CommonModule, LocationStrategy, NgFor, NgIf, PathLocationStrategy} from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';



import { FullComponent } from './layouts/full/full.component';
import { FullCustomerComponent} from "./pages/customer/full-customer.component";
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
// Authentification.
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HeaderCustomerComponent } from './pages/customer/header-customer/header-customer.component';
import { SidebarCustomerComponent } from './pages/customer/sidebar-customer/sidebar-customer.component';
//For responsable cli
import {FullResponsableComponent} from "./pages/responsable/full-responsable.component";
import {ResponsableComponent} from "./pages/responsable/responsable.component";
import {ProductComponent} from "./pages/responsable/product/product.component";
import {ProductDetailsComponent} from "./pages/responsable/product-details/product-details.component";
import {AddProductComponent} from "./pages/responsable/add-product/add-product.component";
import {ProfileComponent} from "./pages/responsable/profile/profile.component";
import {OrderComponent} from "./pages/responsable/order/order.component";
import {SidebarResponsableComponent} from "./pages/responsable/sidebar-responsable/sidebar-responsable.component";
import {HeaderResponsableComponent} from "./pages/responsable/header-responsable/header-responsable.component";
// For revendeur
import { ProductComponent as RevendeurProduct } from './pages/revendeur/product/product.component';
import { ProductDetailsComponent as RevendeurProductDetails } from './pages/revendeur/product-details/product-details.component';
import { FullRevendeurComponent } from './pages/revendeur/full-revendeur.component';
import {RevendeurComponent} from "./pages/revendeur/revendeur.component";
import {SidebarRevendeurComponent} from "./pages/revendeur/sidebar-revendeur/sidebar-revendeur.component";
import {HeaderRevendeurComponent} from "./pages/revendeur/header-revendeur/header-revendeur.component";


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    FullCustomerComponent,
    AppHeaderComponent,
    SpinnerComponent,


    // Fr Authenticator.
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    CustomerComponent,
    HeaderCustomerComponent,
    SidebarCustomerComponent,


    // respo cli
    ResponsableComponent,
    FullResponsableComponent,
    HeaderCustomerComponent,
    SidebarResponsableComponent,
    HeaderResponsableComponent,
    SidebarResponsableComponent,

    AddProductComponent,
    ProductComponent,
    ProductDetailsComponent,
    OrderComponent,
    ProfileComponent,

  //  For revendeur
    HeaderRevendeurComponent,
    SidebarRevendeurComponent,
    RevendeurComponent,
    RevendeurProduct,
    RevendeurProductDetails,
    FullRevendeurComponent



  ],
  imports: [
    BrowserModule,
    // CommonModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    AppSidebarComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

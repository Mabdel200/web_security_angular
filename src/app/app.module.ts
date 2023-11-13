
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
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
import { ResponsableComponent } from './pages/responsable/responsable.component';
import { FullResponsableComponent } from './pages/responsable/full-responsable.component';
import { HeaderResponsableComponent } from './pages/responsable/header-responsable/header-responsable.component';
import { SidebarResponsableComponent } from './pages/responsable/sidebar-responsable/sidebar-responsable.component';
import { AddProductComponent } from './pages/responsable/add-product/add-product.component';
import { ProductComponent } from './pages/responsable/product/product.component';
import { ProductDetailsComponent } from './pages/responsable/product-details/product-details.component';
import { OrderComponent } from './pages/responsable/order/order.component';
import { ProfileComponent } from './pages/responsable/profile/profile.component';
import { HeaderRevendeurComponent } from './pages/revendeur/header-revendeur/header-revendeur.component';
import { SidebarRevendeurComponent } from './pages/revendeur/sidebar-revendeur/sidebar-revendeur.component';
import { RevendeurComponent } from './pages/revendeur/revendeur.component';

import { ProductComponent as RevendeurProduct } from './pages/revendeur/product/product.component';
import { ProductDetailsComponent as RevendeurProductDetails } from './pages/revendeur/product-details/product-details.component';
import { FullRevendeurComponent } from './pages/revendeur/full-revendeur.component';



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
    ResponsableComponent,
    FullResponsableComponent,
    HeaderCustomerComponent,
    SidebarResponsableComponent,
    HeaderResponsableComponent,
    SidebarResponsableComponent,
    SidebarCustomerComponent,
    AddProductComponent,
    ProductComponent,
    ProductDetailsComponent,
    OrderComponent,
    ProfileComponent,
    HeaderRevendeurComponent,
    SidebarRevendeurComponent,
    RevendeurComponent,
    RevendeurProduct,
    RevendeurProductDetails,
    FullRevendeurComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
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

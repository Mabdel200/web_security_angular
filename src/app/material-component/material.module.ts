import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './forms/buttons.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import {MenuComponent} from "./commande/menu.component";
import {TabsComponent} from "./article/tabs.component";
import {StepperComponent} from "./categorie/stepper.component";
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { AddUserFormComponent } from './forms/add-user-form/add-user-form.component';
import { AddOrderFormComponent } from './forms/add-order-form/add-order-form.component';
import { AddArticleFormComponent } from './forms/add-article-form/add-article-form.component';
import { AddCategorieFormComponent } from './forms/add-categorie-form/add-categorie-form.component';
import { AddStockFormComponent } from './forms/add-stock-form/add-stock-form.component';
import { AddMarqueFormComponent } from './forms/add-marque-form/add-marque-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,

    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,

  ],
  providers: [],
  declarations: [
    AddUserFormComponent,
    AddOrderFormComponent,
    AddArticleFormComponent,
    AddCategorieFormComponent,
    AddStockFormComponent,
    AddMarqueFormComponent
  ],
})
export class MaterialComponentsModule {}

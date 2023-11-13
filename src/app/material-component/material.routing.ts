import { Routes } from '@angular/router';

import { ButtonsComponent } from './forms/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent} from "./commande/menu.component";
import { TabsComponent} from "./article/tabs.component";
import { StepperComponent} from "./categorie/stepper.component";
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {AddUserFormComponent} from "./forms/add-user-form/add-user-form.component";
import {AddOrderFormComponent} from "./forms/add-order-form/add-order-form.component";
import {AddCategorieFormComponent} from "./forms/add-categorie-form/add-categorie-form.component";
import {AddArticleFormComponent} from "./forms/add-article-form/add-article-form.component";
import {AddStockFormComponent} from "./forms/add-stock-form/add-stock-form.component";
import {AddMarqueFormComponent} from "./forms/add-marque-form/add-marque-form.component";

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },

//  Forms routes
  {
    path: 'add-user-form',
    component: AddUserFormComponent
  },
  {
    path: 'add-order-form',
    component: AddOrderFormComponent
  },
  {
    path: 'add-categorie-form',
    component: AddCategorieFormComponent
  },
  {
    path: 'add-article-form',
    component: AddArticleFormComponent
  },
  {
    path: 'add-marque-form',
    component: AddMarqueFormComponent
  },
  {
    path: 'add-stock-form',
    component: AddStockFormComponent
  },
];

import {Injectable} from "@angular/core";


export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}


const MENUITEMS = [
  { state: 'dashboard', name: 'Tableau de bord', type: 'link', icon: 'av_timer' },
  { state: 'lists', type: 'link', name: 'Gérer toto', icon: 'view_list' },
  { state: 'menu', type: 'link', name: 'Gérer titi', icon: 'view_headline' },
  { state: 'tabs', type: 'link', name: 'Gérer tata', icon: 'tab' },
  { state: 'stepper', type: 'link', name: 'Gérer SMART', icon: 'web' },

]

@Injectable()
export class MenuItemsCustomer {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

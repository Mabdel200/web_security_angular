import {Component, OnInit} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";
import {OrderService} from "../../serives/order/order.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule, NgFor, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    NgIf, MatButtonModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit{

  public orders: any
  //=========== begin ==============================
  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
  }


  //Get all users.
  ngOnInit(): void {
    this.orderService.getCommandes().subscribe( (datas) =>{
      console.log(datas);
      this.orders =datas;
    })
  }
}

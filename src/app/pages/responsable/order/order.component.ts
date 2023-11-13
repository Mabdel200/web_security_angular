import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/serives/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  public orders: any

  constructor(
    private orderService: OrderService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe((datas) => {
      console.log(datas);
      this.orders =datas;
    });
  }



}

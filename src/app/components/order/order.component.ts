import { Component, OnInit } from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.orderService.findAll().subscribe(result => {
      // @ts-ignore
      this.orders = result;
      console.log(result)
    }, error => {
      console.log(error);
    });
  }
}


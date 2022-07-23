import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient : HttpClient) { }

  API ='http://localhost:8080/orders'

  findAll(): Observable<Order[]>{
    // @ts-ignore
    return this.httpClient.get(this.API);
  }

}

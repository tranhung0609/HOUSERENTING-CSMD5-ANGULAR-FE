import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";
const API_URL = environment.apiUrl + '/home';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  findAllPublicHome(): Observable<House[]>{
    // @ts-ignore
    return this.http.get(API_URL)
  }


}

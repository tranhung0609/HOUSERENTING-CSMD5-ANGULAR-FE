import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_CA ='http://localhost:8080/categories'

  findAll(): Observable<Category[]>{
    // @ts-ignore
    return this.httpClient.get(this.API_CA);
  }

  getById(id: any): Observable<Category> {
    return this.httpClient.get<Category>(this.API_CA + `/${id}`);
  }

  save(category:Category): Observable<any> {
    return this.httpClient.post(this.API_CA,category)
  }
  constructor(private httpClient: HttpClient) { }
}

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {House} from "../models/house";
const API_URL = environment.apiUrl + '/houses';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  findAllPublicHome(): Observable<House[]>{
    // @ts-ignore
    return this.http.get(API_URL)
  }

  findAllHouseByUser(id: string): Observable<House[]>{
    // @ts-ignore
    return this.http.get(API_URL+'/find-by-ownerId?id=' + id);
  }
  save(house:House): Observable<any> {
    return this.http.post(API_URL,house)
  }

  getById(id: any): Observable<House> {
    return this.http.get<House>(API_URL + `/${id}`);
  }
  edit(id: number, house: House): Observable<House> {
    return this.http.put<House>(`${API_URL}/${id}`, house);
  }
  delete(id: number): Observable<House> {
    return this.http.delete<House>(API_URL + `/${id}`);
  }


}

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {House} from "../models/house";
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  registerSuccess(token: string): Observable<any> {
    return this.http.get<any>(API_URL + '/confirm-account?token=' + token);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/login', user);
  }

  newPassword(user: User, id: number): Observable<User> {
    return this.http.put<User>(API_URL + `/new-password/${id}`, user);
  }

  userDetail(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  getUserProfile(id: string): Observable<User> {
    return this.http.get<User>(API_URL + `/users/${id}`);
  }

  updateUserProfile(id: number, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${id}`, user);
  }

  updatePassword(username: string, user: User): Observable<User> {
    return this.http.put<User>(API_URL + `/users/${username}/new-password-username`, user);
  }

  logout() {
    localStorage.removeItem('token');
  }


  delete(id: number): Observable<House> {
    return this.http.delete<House>(API_URL + `/${id}`);


  }

}

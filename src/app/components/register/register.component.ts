import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import Swal from "sweetalert2";

const API_URL = environment.apiUrl;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public signUpForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: [''],
      phone: [''],
      password: [''],
      confirmPassword: [''],

    })
  }

  signUp() {
    this.http.post<any>(API_URL + '/register', this.signUpForm.value).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '\n' +
          '\n' +
          'Registration failed ! Please double check the information',
        showConfirmButton: false,
        timer: 1500
      })
      this.signUpForm.reset();
      this.router.navigate(['login'])
    }, error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: '\n' +
          '\n' +
          'Registration failed ! Please double check the information',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import firebase from "firebase/compat";
import User = firebase.User;
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HouseService} from "../../../../services/house.service";
import {UserService} from "../../../../services/user.service";
import {House} from "../../../../models/house";

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  house: House[] = [];
  form = new FormGroup({
    name: new FormGroup(''),
    category: new FormGroup(''),
    address: new FormGroup(''),
    bedroom: new FormGroup(''),
    bathroom: new FormGroup(''),
    description: new FormGroup(''),
    price: new FormGroup(''),
    user: new FormGroup(''),
    status: new FormGroup('')
  })
  obj: any;
  id: any;

  // listHouse: any[] = [];

  constructor(private httpClient: HttpClient,
              private router: Router,
              private houseService: HouseService,
              private userService: UserService) {
  }

  ngOnInit(): void {

    this.houseService.findAllHouseByUser(this.id).subscribe((data) => {
      // @ts-ignore
      this.house = data.content;
    });
  }

  add() {
    console.log(this.form.value)
    this.obj = {
      name: this.form.value.name,
      address: this.form.value.address,
      bedroom: this.form.value.bedroom,
      bathroom: this.form.value.bathroom,
      description: this.form.value.description,
      price: this.form.value.price,
      status: this.form.value.status,
      user: {
        id: localStorage.getItem('ID')
      }
    }
    // @ts-ignore
    this.houseService.save(this.obj).subscribe((data) => {
      alert("add successfully");
      this.obj = data;
      // @ts-ignore
      $('#exampleModal').modal('hide');
      this.router.navigate(['/user'])
    })
  }

}

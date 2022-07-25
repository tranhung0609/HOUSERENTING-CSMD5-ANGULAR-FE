import { Component, OnInit } from '@angular/core';
import {House} from "../../../../models/house";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HouseService} from "../../../../services/house.service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  house: House[] = [];
  form = new FormGroup({

    category: new FormControl(''),
    address: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    description: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    user: new FormControl(''),
    status: new FormControl('')
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

    // this.houseService.findAllHouseByUser(this.id).subscribe((data) => {
    //   // @ts-ignore
    //   this.house = data.content;
    // });
  }

  add() {
    console.log(this.form.value)
    this.obj = {

      address: this.form.value.address,
      bedroom: this.form.value.bedroom,
      bathroom: this.form.value.bathroom,
      description: this.form.value.description,
      name: this.form.value.name,
      price: this.form.value.price,
      status: this.form.value.status,
      user: {
        id: localStorage.getItem('ID')
      }
    }
    // @ts-ignore
    this.houseService.save(this.obj).subscribe((data) => {
      alert("Add Successfully");
      this.obj = data;
      // @ts-ignore
      $('#exampleModal').modal('hide');
      this.router.navigate(['/user'])
    })
  }


}

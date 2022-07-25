import { Component, OnInit } from '@angular/core';
import {House} from "../../../../models/house";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HouseService} from "../../../../services/house.service";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-delete-house',
  templateUrl: './delete-house.component.html',
  styleUrls: ['./delete-house.component.css']
})
export class DeleteHouseComponent implements OnInit {

  house: House[] = [];
  form = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    address: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    user: new FormControl(''),
    status: new FormControl('')
  })
  obj: any;
  id: any;



  constructor(private httpClient: HttpClient,
              private router: Router,
              private activatedRoute : ActivatedRoute,
              private houseService: HouseService,
              private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getHouse(this.id);
    });
  }


  ngOnInit(): void {
  }
  private getHouse(id: number){
    return this.houseService.getById(id).subscribe(data =>{
      // @ts-ignore

      this.form = new FormGroup({
        name: new FormControl(data.name),
        address: new FormControl(data.address),
        bedroom: new FormControl(data.bedroom),
        bathroom: new FormControl(data.bathroom),
        description: new FormControl(data.description),
        price: new FormControl(data.price),
        status: new FormControl(data.status),
        user: {
          // @ts-ignore
          id: localStorage.getItem('ID')
        }
      });
    });

  }

  delete(id: number){
    this.houseService.delete(id).subscribe(() =>{
      alert('Delete Successfully');
      // @ts-ignore
      this.router.navigate(['/user'])
    }, error => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HouseService} from "../../../../services/house.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css']
})
export class AddHomeComponent implements OnInit {

  constructor(private houseService: HouseService,
              private router: Router) { }

  ngOnInit(): void {
  }


}

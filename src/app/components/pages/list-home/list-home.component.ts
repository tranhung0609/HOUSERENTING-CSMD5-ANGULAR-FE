import { Component, OnInit } from '@angular/core';
import {HouseService} from "../../../services/house.service";

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  homes: any;

  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.findAllPublicHome().subscribe((houses) => {
      console.log(houses)
      // @ts-ignore
      this.homes = houses.content;
    })
  }
}

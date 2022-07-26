import {Component, Input, OnInit} from '@angular/core';
import {House} from "../../../models/house";

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  @Input()
  house: House[] = [];
  userId = ''
  constructor() { }

  ngOnInit(): void {
  }

}

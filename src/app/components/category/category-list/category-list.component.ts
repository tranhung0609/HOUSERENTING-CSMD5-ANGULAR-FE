import { Component, OnInit } from '@angular/core';
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category:Category[]=[];


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.findAll().subscribe(result => {
      // @ts-ignore
      this.category = result;
      console.log(result)
    }, error => {
      console.log(error);
    });
  }
}

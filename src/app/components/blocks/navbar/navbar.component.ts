import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin = false;
  USERNAME = "";
  userId = "";

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.isLogin = localStorage.getItem('USERNAME') == null ? false : true;
    // @ts-ignore
    this.USERNAME = localStorage.getItem('USERNAME');
    // @ts-ignore
    this.userId = localStorage.getItem('id');
  }

  logOut(){
    localStorage.clear();
    this.isLogin = false;
    this.router.navigate(['/']);
  }

}

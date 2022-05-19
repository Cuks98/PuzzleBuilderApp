import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userName: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('username')){
      this.userName = localStorage.getItem('username')
    }else{
      this.userName = "Login"
    }
    
  }
  login(): void{
    this.router.navigateByUrl('/login');
  }
  welcome(): void{
    this.router.navigateByUrl('/welcome');
  }
  cart():void{
    this.router.navigateByUrl('/cart')
  }

}

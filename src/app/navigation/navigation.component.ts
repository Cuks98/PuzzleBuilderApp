import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userName: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = "Login"
  }
  login(): void{
    this.router.navigateByUrl('/login');
  }

}

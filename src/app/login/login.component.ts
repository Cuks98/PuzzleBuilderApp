import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value4: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login():void{
    this.router.navigateByUrl('/welcome');
  }
}

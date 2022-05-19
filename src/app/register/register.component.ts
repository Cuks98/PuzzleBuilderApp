import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as data from '../../assets/users.json'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  value4: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register():void{
    //console.log(data)
    //this.router.navigateByUrl('/login');
  }

}

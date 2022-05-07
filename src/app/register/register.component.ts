import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.router.navigateByUrl('/welcome');
  }

}

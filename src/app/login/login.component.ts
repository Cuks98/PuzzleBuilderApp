import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value4: string | undefined;
  key: string = "username";
  userName: string = "Login";
  password: string = "";
  apiRes: boolean = false;
  data: any;
  data2: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  async login():Promise<void>{
    this.userName = (<HTMLInputElement>document.getElementById('username')).value;
    this.password = (<HTMLInputElement>document.getElementById('password')).value;
    // this.userService.getUser(this.userName).subscribe({
    //   next: res=>{
    //     this.apiRes = res
    //   },
    //   error: err => console.error(err)
    // })
    // console.log(this.apiRes)
    debugger;
    //this.userService.getUser2("test", "test");

    const bool = (await this.userService.getUser3()).subscribe(
      data => {
        console.log(data)
        data.users.forEach((user: { [x: string]: string; }) => {
          if(user["username"] == this.userName){
            console.log(true);
            localStorage.setItem(this.key, this.userName);
            this.router.navigateByUrl('/welcome');
          }else{
            console.log(false)
          }
        });
      }
    )
    console.log(bool);
    //console.log(this.data);

    //this.router.navigateByUrl('/welcome');
    localStorage.setItem(this.key, this.userName);
    
    
    // this.puzzleService.getMostPlayedPuzzles().subscribe({
    //   next: puzzles => {
    //     this.puzzles = puzzles;
    //     this.puzles = puzzles;
    //     console.log(this.puzzles[0].image);
    //   },
    //   error: err => console.error(err)
    // })
    // console.log(this.puzles);
  }
}

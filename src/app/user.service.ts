import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: any;
  data2: any;

  constructor(private http: HttpClient) { }
  
  getUser(username: string): Observable<boolean>{
    username = "test";
    return this.http.get<boolean>("../assets/images.json");
  }
  async getUser3(): Promise<Observable<any>>{
    return this.http.get<any>("../assets/users.json");
  }
  async getUser2(username: string, password: string): Promise<boolean>{
    debugger;
    username = "test";
    password = "test";
    console.log(1)
    //console.log(this.data)
    this.http.get<any>("../assets/users.json").subscribe({
      next: data => {
        this.data = data;
        this.data2 = data;
        console.log(this.data2);
      },
      error: err => console.error(err)
    });
    console.log(this.data2);
    console.log(2)
    // this.data2.forEach(user => {
    //   console.log(user["username"]);
    // });
    return true;
  }
}

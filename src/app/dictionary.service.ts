import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService{
  private lang:number = 0;

  constructor(private http: HttpClient) {}

  

}

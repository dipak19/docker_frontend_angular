import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  Select() {
  return this.http.get("http://172.18.0.120:9898/");
  }

}

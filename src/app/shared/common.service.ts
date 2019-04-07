import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private http: HttpClient
  ) { }

  getposts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  submitUserList(data) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
    // return this.http.post('https://jsonplaceholder.typicode.com/posts');
  }
}

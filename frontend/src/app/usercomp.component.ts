import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercomp',
  template: `
    <p>
      usercomp works!
    </p>
    <button (click)="getphoto()">get photo</button><br />
    <button (click)="getbanknumber()">get bank</button><br />

    <button (click)="logout()">logout</button>
  `,
  styles: [],
})
export class UsercompComponent implements OnInit {
  token;
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    this.token = localStorage.getItem('token');
  }
  getphoto() {
    this.http
      .get('http://localhost:3000/photos', {
        headers: { Authorization: this.token },
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
  getbanknumber() {
    this.http
      .get('http://localhost:3000/banknumber', {
        headers: { Authorization: this.token },
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <h2>Hello world</h2>

    <form [formGroup]="loginform" (ngSubmit)="onSubmit()">
      <p>email <input type="text" formControlName="email" /></p>

      <p>password <input type="text" formControlName="password" /></p>

      <button type="submit">Login</button>
    </form>
  `,
  styles: [],
})
export class LoginComponent {
  loginform;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginform = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  onSubmit() {
    this.http
      .post('http://localhost:3000/login', this.loginform.value)
      .subscribe((data) => {
        if (data['success'] == true) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['display']);
        }
      });
  }
}

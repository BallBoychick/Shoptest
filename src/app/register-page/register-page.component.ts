import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  constructor(private router: Router) {}
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  signUpobj: SignUpModel = new SignUpModel();

  get f(){
    return this.form.controls;
  }

  submit(){
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.form.value);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    else {
      const users = [];
      users.push(this.form.value);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    this.router.navigateByUrl('login');
  }
}


export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }
}

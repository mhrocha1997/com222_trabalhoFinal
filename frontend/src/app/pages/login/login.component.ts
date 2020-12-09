import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private user: UserService) {}

  name: string;
  email: string;
  password: string;

  ngOnInit(): void {}

  createUser() {
    if (!this.name || !this.email || !this.password) {
      alert('Por favor, preencha todos os três campos para continuar.');
      return;
    }

    let user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.user.registerUser(user).subscribe(async (user: any) => {
      console.log(user);
      if (user) {
        await localStorage.setItem('token', user.token);
        window.location.href = 'http://localhost:4200/';
      }
    });
  }

  async loginUser() {
    if (!this.email || !this.password) {
      alert('Por favor, preencha todos os dois campos para continuar.');
      return;
    }

    let user = {
      email: this.email,
      password: this.password,
    };

    this.user.loginUser(user).subscribe(async (user: any) => {
      console.log(user.user.name);
      if (user) {
        await localStorage.setItem('token', user.token);
        await localStorage.setItem('user', user.user.email);
        window.location.href = 'http://localhost:4200/';
      }
    });
  }
  //Login
  getEmail(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }

  getPassword(event: any) {
    this.password = event.target.value;
    console.log(this.password);
  }

  getUserName(event: any) {
    this.name = event.target.value;
    console.log(this.name);
  }

  //Registrar
}

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

  emailLogin: string;
  passLogin: string;

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
    if (!this.emailLogin || !this.passLogin) {
      alert('Por favor, preencha todos os dois campos para continuar.');
      return;
    }

    let user = {
      email: this.emailLogin,
      password: this.passLogin,
    };

    try {
      this.user.loginUser(user).subscribe(async (user: any) => {
        console.log(user.user.name);
        if (user) {
          await localStorage.setItem('token', user.token);
          await localStorage.setItem('user', user.user.email);
          window.location.href = 'http://localhost:4200/';
        } else {
          alert('Ops! Algo deu errado! Confira seus dados e tente novamente.');
        }
      });
    } catch (error) {
      alert('Ops! Alguma coisa de errada aconteceu');
    }
  }
  //Registrar
  getEmail(event: any) {
    this.email = event.target.value;
    console.log(this.email);
  }

  getPassword(event: any) {
    this.password = event.target.value;
    console.log(this.password);
    if (event.keyCode == 13) {
      event.preventDefault();
      document.getElementById('createAcc').click();
    }
  }

  getUserName(event: any) {
    this.name = event.target.value;
    console.log(this.name);
  }

  //Login
  getEmailLogin(event: any) {
    this.emailLogin = event.target.value;
  }

  getPasswordLogin(event: any) {
    this.passLogin = event.target.value;

    if (event.keyCode == 13) {
      event.preventDefault();
      document.getElementById('confirmLogin').click();
    }
  }
}

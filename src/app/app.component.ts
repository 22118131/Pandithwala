import { Component } from '@angular/core';


interface User {
  firstName?: string;
  lastName?: string;
  emailOrMobile: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin = true;

  // Login fields
  loginEmailOrMobile = '';
  loginPassword = '';

  // Signup fields
  firstName = '';
  lastName = '';
  signupEmailOrMobile = '';
  signupPassword = '';
  confirmPassword = '';

  // Dummy DB (local memory)
  users: User[] = [
    {
      emailOrMobile: 'test@gmail.com',
      password: '123456'
    },
    {
      emailOrMobile: '9700173433',
      password: '123456'
    }
  ];

  showLogin() {
    this.isLogin = true;
  }

  showSignup() {
    this.isLogin = false;
  }

  // LOGIN
  login() {
    const user = this.users.find(
      u =>
        u.emailOrMobile === this.loginEmailOrMobile &&
        u.password === this.loginPassword
    );

    if (user) {
      alert('Login Successful ✅');
    } else {
      alert('Invalid Email/Mobile or Password ❌');
    }
  }

  // SIGN UP
  signup() {
    if (this.signupPassword !== this.confirmPassword) {
      alert('Passwords do not match ❌');
      return;
    }

    const exists = this.users.find(
      u => u.emailOrMobile === this.signupEmailOrMobile
    );

    if (exists) {
      alert('User already exists ❌');
      return;
    }

    this.users.push({
      firstName: this.firstName,
      lastName: this.lastName,
      emailOrMobile: this.signupEmailOrMobile,
      password: this.signupPassword
    });

    alert('Signup Successful 🎉 Please Login');
    this.showLogin();
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../business-contacts/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {}

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log(loginForm.value);
      // Make an HTTP POST request to validate credentials
      this.http
        .post<any>('http://localhost:4000/users', {
          username: this.username,
          password: this.password
        })
        .subscribe(
          response => {
            // Successful login
            // Set the login status
            this.authService.login();
            // Redirect to the Business Contacts List component
            this.router.navigate(['/businessContact']);
          },
          error => {
            // Handle invalid credentials case
            console.error(error);
            // Show appropriate error message to the user
          }
        );
    }
  }
}

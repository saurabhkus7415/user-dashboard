import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  onSubmit(): void {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}

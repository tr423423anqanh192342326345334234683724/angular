import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: any = {
    username: '',
    password: '',
  };
  
  constructor(private router: Router, private http: HttpClient) {}

  kiemtradangnhap() {
    if(this.login.username === '' || this.login.password === '') {
      alert('Vui lòng nhập đẩy đủ thông tin');
    } else {
      this.router.navigate(['/products']);
    };
   
  }
}

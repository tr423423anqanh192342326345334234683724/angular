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
    this.http.post('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=thuc_pham_chuc_nang&table=tai_khoan_khach_hang', this.login).subscribe((data: any) => {
      this.router.navigate(['/products']);
    }); // Thêm dấu ngoặc đóng và dấu chấm phẩy
  }
}

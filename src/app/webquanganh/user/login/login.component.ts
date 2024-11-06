import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:any = {
  username:   '',
  password:   '',
}
constructor(private router: Router){}
kiemtradangnhap(){
  if(this.login.username == 'admin' && this.login.password == 'admin'){
    this.router.navigate(['/products']);
    alert('Đăng nhập thành công');
  }else{
    alert('Đăng nhập thất bại');
  }
}
}

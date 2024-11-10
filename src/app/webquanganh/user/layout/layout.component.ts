import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  timkiem: string = '';
  constructor(private router: Router) {}
    
  dangxuat() {
    this.router.navigate(['/login']);
  }
  mathang() {
    this.router.navigate(['/products']);
  }
  lienhe() {
    this.router.navigate(['/lienhe']);
  }
  marsa() {
    this.router.navigate(['/marsa']);
  }
  timKiem() {
    switch (this.timkiem.trim()) {
      case '':
        alert('Vui lòng nhập từ khóa tìm kiếm');
        break;
      case 'sản phẩm':
        this.router.navigate(['/products']);
        break;
      case 'liên hệ':
        this.router.navigate(['/lienhe']);
        break;
      case 'mã rsa':
        this.router.navigate(['/marsa']);
        break;
      default:
        alert('Không tìm thấy sản phẩm');
        break;
    }
  }
}

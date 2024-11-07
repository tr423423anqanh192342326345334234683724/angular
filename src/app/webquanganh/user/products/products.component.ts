import { Component, Inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SanphamService } from '../../../server/sanpham/sanpham.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatListModule, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  kiemtra: boolean = false;
  productop: any = {
    "id": 0,
    "ten": "",
    "loai": "",
    "ngay": new Date(),
    "soluong": 0,
  };

  constructor(private router: Router, private sanphamService: SanphamService) {}

  openkiemtra() {
    this.kiemtra = true;
  }

  closekiemtra() {
    this.kiemtra = false;
  }
}

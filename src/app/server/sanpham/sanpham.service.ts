import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'

})
export class SanphamService {

  constructor(private http: HttpClient) { }
  getSanpham() {
    return this.http.get('http://localhost/phpmyadmin/index.php?route=/sql&pos=0&db=thuc_pham_chuc_nang&table=tai_khoan_khach_hang');
  }
}

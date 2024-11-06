import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}

import { Component } from '@angular/core';
import { ProductService } from '../prod.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  products$ : any;

  constructor(
    private productServ: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productServ.getAll()
  }

}

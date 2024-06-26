import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() product: any

  constructor(
    private productServ : ProductService
  ) { }

  ngOnInit() {

  }

  addProduct(product: any) {
    this.productServ.addProduct(product)

  }
}

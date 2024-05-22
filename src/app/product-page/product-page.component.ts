import { Component } from '@angular/core';
import { ProductService } from '../prod.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  product$: any;
  
  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.productServ.getPhoneById(params['id']))
    ).subscribe(product => {
      this.product$ = product;
    });
  }
}

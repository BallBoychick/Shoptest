import { Component, OnInit } from '@angular/core';
import { ProductService } from '../prod.service';
import { Prod } from '../prod';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit{
  cartProducts: Prod[] = [];
  totalPrice = 0
  added = ''
  form!: FormGroup;
  submitted = false

  constructor(
    private productServ : ProductService,
    private orderServ : OrderService
  ) { }

  ngOnInit() {
    this.cartProducts = this.productServ.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price
      
    }

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    })

  }

  async submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date()
    }

    console.log(this.form)
    // this.orderServ.create(order).subscribe( res => {
    //   this.form.reset()
    //   this.added = 'Delivery is framed'
    //   this.submitted = false
    // })

      try {
        await this.orderServ.create(order);
        this.form.reset();
        this.added = 'Delivery is framed';
        this.submitted = false;
        this.submitted = true;
      } catch (error) {
        console.error("Error creating order: ", error);
      }

  }

}

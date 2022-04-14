import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts : any = [];
  constructor( private cartServ: CartService) { }

  ngOnInit(): void {
    this.getCarts()
  }
  getCarts(){
    this.cartServ.getCarts().subscribe((data: any) => {
      this.carts=data;
      alert(JSON.stringify(data));
    });

  }

  delete(){

  }

}

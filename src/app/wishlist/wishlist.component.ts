import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist-service';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist: any= [];
  constructor( private wishlistServ: WishlistService, private cartServ: CartService) { }

  ngOnInit(): void {
    this.getWishlist();
  }
  getWishlist(){
    this.wishlistServ.getWishlists().subscribe((data: any) => {
      this.wishlist=data;
    });
  }

  addToCart(product: any){
    let cart= {
      product: product,
      id: product.id
    }
  
    this.cartServ.createCart(cart).subscribe((data: {}) => {
    alert("Success ");
    this.deleteWishlist(cart.id);
    });

  }
  deleteWishlist(id: any){
    this.wishlistServ.deleteWishlist(id).subscribe((data: any) => {
      alert("Successfully deleted the item from Wishlist");
      this.getWishlist();
    });
  }

}


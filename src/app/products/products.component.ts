import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { CartService } from '../services/cart-service';
import { JsonpClientBackend } from '@angular/common/http';
import { WishlistService } from '../services/wishlist-service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: any= {
    id: null,
    name: '',
    description: '',
    imageUrl: '',
    price: null
  };
  products: any =[];

  constructor( private prodServ: ProductService, private cartServ: CartService, private wishlistServ: WishlistService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.prodServ.getProducts().subscribe((data: any) => {
      this.products=data;
    });

  }

  save(){
    this.prodServ.createProduct(this.product).subscribe((data: {}) => {
      alert("Success");
    });

  }
  addToCart(product: any){
    let cart= {
      product: product,
      id: this.product.id
    }
  
    this.cartServ.createCart(cart).subscribe((data: {}) => {
      alert("Success ");
    });

  }
  addToWishlist(product: any)
  {  
    this.wishlistServ.createWishlist(product).subscribe((data: {}) => {
      alert("Success ");
    });
  }
}
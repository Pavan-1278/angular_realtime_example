import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

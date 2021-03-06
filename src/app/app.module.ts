import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';
import { CartService } from './services/cart-service';
import { CommentService } from './services/comment-service';
import { PostService } from './services/post-service';
import { ProductService } from './services/product-service';
import { ProfileService } from './services/profile-service';
import { WishlistService } from './services/wishlist-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth-services/auth-service-guard';
import { AuthService } from './auth-services/auth-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    WishlistComponent,
    CartComponent,
    PostsComponent,
    CommentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CartService, CommentService, PostService, ProfileService, ProductService, WishlistService,
  AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { canActivate , redirectUnauthorizedTo, redirectLoggedInTo  } from '@angular/fire/auth-guard';


const redirectToLogin = ()=> redirectUnauthorizedTo(['login']);
const redirectToProducts = () => redirectLoggedInTo(['products']);

const routes: Routes = [
  // { path:'', redirectTo:'products', pathMatch:'full'},
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    ...canActivate(redirectToLogin),
  },
  { path: 'cart', component: CartComponent },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectToProducts),
  },
  {
    path: 'signup',
    component: SignUpComponent,
    ...canActivate(redirectToProducts),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

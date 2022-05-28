import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'product/:id',component: ProductsComponent,
  },
  {
    path:'cart',component:CartComponent
  }
  ,{
    path:'checkout',component:CheckoutComponent,
  },
  {
    path:'thankyou',component:ThankyouComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

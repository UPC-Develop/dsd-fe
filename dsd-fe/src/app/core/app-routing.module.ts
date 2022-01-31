import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from '../views/user/login/user-login.component';
import { HomeComponent } from '../views/home/home.component';
import { MiscellanyComponent } from '../views/miscellany/miscellany.component';
import { UserRegisterComponent } from '../views/user/register/user-register.component';
import { ProductComponent } from '../views/product/product.component';
import { CampusComponent } from '../views/campus/campus.component';
import { UserHomeComponent } from '../views/user/home/user-home.component';
import { BookingComponent } from '../views/booking/booking.component';
import { OrderSummaryComponent } from '../views/order/order-summary.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children:
      [{ path: 'miscellany', component: MiscellanyComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'campus', component:CampusComponent },
      { path: 'product', component: ProductComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'order-summary', component: OrderSummaryComponent },
      { path: 'user-home', component: UserHomeComponent }
    ]
  },
  { path: '', redirectTo: 'home/miscellany', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/miscellany', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

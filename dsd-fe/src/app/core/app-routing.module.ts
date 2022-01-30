import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { HomeComponent } from '../views/home/home.component';
import { MiscellanyComponent } from '../views/miscellany/miscellany.component';
import { UserRegisterComponent } from '../views/user/user-register.component';
import { ProductComponent } from '../views/product/product.component';
import { CampusComponent } from '../views/campus/campus.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children:
      [{ path: 'miscellany', component: MiscellanyComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user-register', component: UserRegisterComponent },
      { path: 'campus', component:CampusComponent },
      { path: 'product', component: ProductComponent }]
  },
  { path: '', redirectTo: 'home/miscellany', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/miscellany', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

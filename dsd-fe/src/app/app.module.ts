import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from "./core/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './views/home/home.component';
import { UserLoginComponent } from './views/user/login/user-login.component';
import { MiscellanyComponent } from './views/miscellany/miscellany.component';
import { FooterComponent } from './views/footer/footer.component';
import { UserRegisterComponent } from './views/user/register/user-register.component';
import { ProductComponent } from './views/product/product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CampusComponent } from './views/campus/campus.component';
import { UserHomeComponent } from './views/user/home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './views/booking/booking.component';
import { OrderSummaryComponent } from './views/order/order-summary.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingDetailComponent } from './views/booking/booking-detail/booking-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiscellanyComponent,
    FooterComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CampusComponent,
    ProductComponent,
    UserHomeComponent,
    BookingComponent,
    OrderSummaryComponent,
    BookingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

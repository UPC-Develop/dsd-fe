import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import {CustomMaterialModule} from "./core/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MiscellanyComponent } from './views/miscellany/miscellany.component';
import { FooterComponent } from './views/footer/footer.component';
import { UserRegisterComponent } from './views/user/user-register.component';
import { ProductComponent } from './views/product/product.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiscellanyComponent,
    FooterComponent,
    LoginComponent,
    UserRegisterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

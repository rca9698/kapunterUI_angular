import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterComponent } from './Accounts/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountsModule } from './Accounts/accounts.module';
import { NotFoundComponent } from './Shared/component/error/not-found/not-found.component';
import { ValidationMessageComponent } from './Shared/component/error/validation-message/validation-message.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ValidationMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

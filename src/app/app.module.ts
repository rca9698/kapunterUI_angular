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
import { SitesModule } from './Sites/sites.module';
import { AppToasterComponent } from './toastr/toastrs/app-toaster.component';
import { FormsModule } from '@angular/forms';
import { AddImageComponent } from './Dashboard/Add-Image/add-image.component';
import { SettingListsComponent } from './settings/setting-lists/setting-lists.component';
import { AuthInterceptorProvider } from './auth-interceptor.service';
import { ListNotificationComponent } from './notification/list-notification/list-notification.component';
import { ChangePasswordRequestsComponent } from './ids/change-password-requests/change-password-requests.component';
import { CloseIdRequestsComponent } from './ids/close-id-requests/close-id-requests.component';
import { ListIdRequestsComponent } from './ids/list-id-requests/list-id-requests.component';
import { ListIdsComponent } from './ids/list-ids/list-ids.component';
import { RejectedIdRequestsComponent } from './ids/rejected-id-requests/rejected-id-requests.component';
import { DeleteModuleComponent } from './Shared/Modules/delete-module/delete-module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ValidationMessageComponent,
    AppToasterComponent,
    AddImageComponent,
    DeleteModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountsModule,
    SitesModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

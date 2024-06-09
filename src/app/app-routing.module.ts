import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './Shared/component/error/not-found/not-found.component';
import { ValidationMessageComponent } from './Shared/component/error/validation-message/validation-message.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  
  //import lazy loading by following formatclear
  {path:"account", loadChildren: () => import('./Accounts/accounts.module').then(module => module.AccountsModule)},
  {path:"site", loadChildren: () => import('./Sites/sites.module').then(module => module.SitesModule) },
  {path:"passbook", loadChildren: () => import('./Passbook/passbook.module').then(module => module.PassbookModule) },
  {path:"bankAccount", loadChildren: () => import('./BankAccount/bank-account.module').then(module => module.BankAccountModule) },
  {path:"dashboard", loadChildren: () => import('./Dashboard/dashboard-routing.module').then(module => module.DashboardRoutingModule) },
  {path:"setting", loadChildren: () => import('./settings/settings.module').then(module => module.SettingsModule) },

  {path:"not-found", component:NotFoundComponent},
  {path:"**",component:ValidationMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

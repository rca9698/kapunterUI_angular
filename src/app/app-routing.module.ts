import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './Shared/component/error/not-found/not-found.component';
import { ValidationMessageComponent } from './Shared/component/error/validation-message/validation-message.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  //import lazy loading by following formatclear
  
  {path:"account", loadChildren: () => import('./Accounts/accounts.module').then(module => module.AccountsModule)},
  {path:"not-found", component:NotFoundComponent},
  {path:"**",component:ValidationMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

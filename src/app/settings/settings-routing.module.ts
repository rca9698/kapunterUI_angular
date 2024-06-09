import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { SettingListsComponent } from './setting-lists/setting-lists.component';

const routes : Routes = [
  { path: 'setting-lists', component: SettingListsComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingListsComponent } from './setting-lists/setting-lists.component';
import { SettingsRoutingModule } from './settings-routing.module';



@NgModule({
  declarations: [
    SettingListsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

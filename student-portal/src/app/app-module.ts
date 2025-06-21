import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentListModule } from '../student-list/student-list-module';
import { StudentSubmitFormModule } from '../student-submit-form/student-submit-form-module';
import { HomeComponent } from './home/home';

import { UpdateDataModule } from '../update-data/update-data-module';

@NgModule({
  declarations: [
   App,
   HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StudentListModule,
    StudentSubmitFormModule,

    FormsModule,

    UpdateDataModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitFormComponent } from './submit-form/submit-form';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubmitFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class StudentSubmitFormModule { }

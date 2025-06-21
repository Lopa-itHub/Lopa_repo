import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UpdateStudent } from './update-student/update-student';
import { DeleteStudent } from './delete-student/delete-student';


@NgModule({
  declarations: [
    UpdateStudent,
    DeleteStudent
  ],  
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UpdateStudent,
    DeleteStudent
  ]
})
export class UpdateDataModule { }

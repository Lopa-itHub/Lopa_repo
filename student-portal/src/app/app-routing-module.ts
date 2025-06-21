import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { provideRouter } from '@angular/router';

import { App } from './app';
import { SubmitFormComponent } from '../student-submit-form/submit-form/submit-form';
import { StudentTableComponent } from '../student-list/student-table/student-table';
import { HomeComponent } from './home/home';


import { UpdateStudent } from '../update-data/update-student/update-student';
import { DeleteStudent } from '../update-data/delete-student/delete-student';





export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student-list', component: StudentTableComponent },
  { path: 'add-student', component: SubmitFormComponent },
  { path: 'update-student', component:UpdateStudent },
  { path: 'delete-student', component:DeleteStudent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

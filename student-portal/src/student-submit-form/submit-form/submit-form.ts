import { Component, ViewChild } from '@angular/core';
import { StudentService } from '../../app/student';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.html',
  styleUrls: ['./submit-form.css'],
  standalone: false
})
export class SubmitFormComponent {
  student = {
    id: '',
    name: '',
    phone: '',
    email: '',
    dob: ''
  };

  dateError = false;

  @ViewChild('studentForm') studentForm!: NgForm;


  constructor(private studentService: StudentService) {}

  // onSubmit() {
  //   this.studentService.addStudent({ ...this.student });
  //   // Reset the form after submission
  //   this.student = { id: '', name: '', phone: '', email: '', dob: '' };
  // }

  onSubmit() {

    const dobDate = new Date(this.student.dob);
    const minDate = new Date('2000-01-01');
    this.dateError = dobDate < minDate;

    if (this.studentForm.invalid || this.dateError) {
      return; // Prevent submission
    }

    this.studentService.addStudent({ ...this.student });
    alert('Student added successfully!');
    this.student = { id: '', name: '', phone: '', email: '', dob: '' };
    this.studentForm.resetForm();
    this.dateError = false;
}

}

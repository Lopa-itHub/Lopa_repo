import { Component } from '@angular/core';
import { StudentService } from '../../app/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.html',
  styleUrls: ['./update-student.css'],
  standalone: false
})
export class UpdateStudent {
  studentId: string = '';
  student: any = null;
  errorMsg: string = '';
  successMsg: string = '';

  constructor(private studentService: StudentService) {}

  fetchStudent() {
    const found = this.studentService.getStudentById(this.studentId);
    if (found) {
      this.student = { ...found }; // Make a copy for editing
      this.errorMsg = '';
      this.successMsg = '';
    } else {
      this.student = null;
      this.errorMsg = 'Student not found!';
      this.successMsg = '';
    }
  }

  updateStudent() {
    if (this.student) {
      this.studentService.updateStudent(this.student);
      this.successMsg = 'Student data updated successfully!';
      this.errorMsg = '';
    }
  }
}

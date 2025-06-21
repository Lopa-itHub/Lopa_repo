import { Component } from '@angular/core';
import { StudentService } from '../../app/student';
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.html',
  styleUrls: ['./delete-student.css'],
  standalone: false
})
export class DeleteStudent {
  studentId: string = '';
  message = '';

  constructor(private studentService: StudentService) {}

  deleteStudent() {
    const students = this.studentService.getStudents();
    const index = students.findIndex(s => s.id == this.studentId);
    if (index !== -1) {
      students.splice(index, 1);
      this.message = 'Student deleted successfully';
      this.studentId = '';
    } else {
      this.message = 'Student not found';
    }
  }
}

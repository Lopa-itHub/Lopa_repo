import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../app/student';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.html',
  styleUrls: ['./student-table.css'],
  standalone: false
})
export class StudentTableComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}

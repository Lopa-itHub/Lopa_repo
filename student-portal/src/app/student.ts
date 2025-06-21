import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: any[] = [];

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudentById(id: string) {
    return this.students.find(s => s.id === id);
  }

  updateStudent(updatedStudent: any) {
    const index = this.students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }
}

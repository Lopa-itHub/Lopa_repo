import { Component } from '@angular/core';
import { StudentService } from '../../app/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  standalone: false
})
export class HomeComponent {

  isChatOpen = true;
  userInput = '';
  messages: { text: string; from: 'user' | 'bot' }[] = [
    { text: 'Hi there! How can I help you today?', from: 'bot' }
  ];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  constructor(private studentService: StudentService) {}


  sendMessage() {
    if (!this.userInput.trim()) return;

    const input = this.userInput;
    this.messages.push({ text: input, from: 'user' });

    // Mock bot reply
    // setTimeout(() => {
    //   this.messages.push({ text: 'Thanks for your message. We’ll get back to you soon!', from: 'bot' });
    // }, 500);

    let reply = 'Sorry, I did not understand that.';
    if (input.toLowerCase() === 'hi') {
      reply = 'hello';
    }

    const idMatch = input.match(/id\s*(\d+)/i);
  if (idMatch) {
    const id = idMatch[1];
    const student = this.studentService.getStudents().find(s => s.id === id);
    if (student) {
      reply = `Yes, student found:
- Name: ${student.name}
- Phone: ${student.phone}
- Email: ${student.email}
- DOB: ${student.dob}`;
    } else {
      reply = `No student found with ID ${id}`;
    }
  }

  // Try to extract name
  const nameMatch = input.match(/named\s+([a-zA-Z ]+)/i);
  if (nameMatch) {
    const name = nameMatch[1].trim().toLowerCase();
    const student = this.studentService.getStudents().find(s => s.name.toLowerCase() === name);
    if (student) {
      reply = `Yes, student found:
- ID: ${student.id}
- Phone: ${student.phone}
- Email: ${student.email}
- DOB: ${student.dob}`;
    } else {
      reply = `No student found named ${name}`;
    }
  }
    this.messages.push({ from: 'bot', text: reply });
    this.userInput = '';
  }

}
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<{
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }>();
  
  editTask() {
    alert('Editing task');
  }
  completeTask() {
    alert('Marking task as completed');
  }
}

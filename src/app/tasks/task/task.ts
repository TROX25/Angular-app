import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  editTask() {
    alert('Editing task');
  }
  completeTask() {
    alert('Marking task as completed');
  }
}

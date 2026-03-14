import { Component, input, signal } from '@angular/core';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string>();

  addTask() 
  {
    alert(`Adding task for ${this.name()}`);
  }
  deleteTask() 
  {
    alert(`Deleting task for ${this.name()}`);
  }
}

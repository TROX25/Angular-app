import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string>();

  addTask() {
    alert(`Adding task for ${this.name()}`);
  }
}

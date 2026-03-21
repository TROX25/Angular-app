import { Component, input, output } from '@angular/core';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task 
{
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

  complete = output<string>();

  completeTask() 
  {
    this.complete.emit(this.task().id);
  }
}

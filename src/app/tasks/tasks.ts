import { Component, computed, input, signal } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { TasksService } from "./tasks.service";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input.required<string>();
  userId = input.required<string>();

  isAddingTask = signal(false);
  
  constructor(private tasksService: TasksService) {}

  addTask() 
  {
    this.isAddingTask.set(true);
  }
  deleteTask() 
  {
    alert(`Deleting task for ${this.name()}`);
  }

 selectedUserTasks = computed(() =>
    this.tasksService.getUserTasks(this.userId())
  );

  onTaskComplete(id: string) 
  {
    this.tasksService.removeTask(id);
  }

  // Chce dodac mozliwosc zamkniecia okna taskowego, wiec dodaje metode cancel, która ustawia isAddingTask na false
  onClose() 
  {
    this.isAddingTask.set(false);
  }

  

}

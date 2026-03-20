import { Component, computed, input, signal } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";

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

  dummyTasks = signal([
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]);

  addTask() 
  {
    this.isAddingTask.set(true);
  }
  deleteTask() 
  {
    alert(`Deleting task for ${this.name()}`);
  }

 selectedUserTasks = computed(() =>
  this.dummyTasks().filter(task => task.userId === this.userId())
  );

  onTaskComplete(id: string) 
  {
    // Wybieram tylko te taski których id jest różne od tego, który został przekazany (czyli usuwam ten task z listy)
    this.dummyTasks.update((tasks) => tasks.filter(task => task.id !== id));
  }

  // Chce dodac mozliwosc zamkniecia okna taskowego, wiec dodaje metode cancel, która ustawia isAddingTask na false
  onCancel() 
  {
    this.isAddingTask.set(false);
  }

  onTaskAdded(taskData: { title: string; summary: string; dueDate: string }) 
  {
    const newTask = {
      id: Math.random().toString(), // Generuje losowe id dla nowego taska
      userId: this.userId(), // Ustawiam userId na aktualne userId z inputu
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.dummyTasks.update((tasks) => [...tasks, newTask]);
    
    // Po dodaniu nowego taska, zamykam okno dodawania taska
    this.isAddingTask.set(false);
  }
  

}

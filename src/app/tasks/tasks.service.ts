// service is a class that provides data and functionality to other parts of the application. It is typically used to share data and logic between components, and to handle tasks such as fetching data from an API or managing state.
import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class TasksService {
  private dummyTasks = signal([
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

 constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.dummyTasks.set(JSON.parse(tasks));
    }
 }

    getUserTasks(userId: string) 
    {
        return this.dummyTasks().filter(task => task.userId === userId);  
    }

    addTask(taskData: { title: string; summary: string; dueDate: string }, userId: string) 
    {
    const newTask = {
      id: Math.random().toString(), // Generuje losowe id dla nowego taska
      userId: userId, // Ustawiam userId na przekazany userId
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    };
    this.dummyTasks.update((tasks) => [...tasks, newTask]);
    this.saveTasksToLocalStorage();
    }

    removeTask(taskId: string) 
    {
        this.dummyTasks.update((tasks) => tasks.filter(task => task.id !== taskId));
        this.saveTasksToLocalStorage();
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.dummyTasks()));
    }
}

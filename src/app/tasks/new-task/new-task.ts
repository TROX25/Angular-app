import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  close = output<void>();
  userId = input.required<string>();

  // Te dwie właściwości będą powiązane z polami formularza, więc ich wartości będą aktualizowane na bieżąco podczas wpisywania danych przez użytkownika.
  // NgModel -> wiazanie dwukirunkowe
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  // inject dziala tak samo jak wstrzykiwanie zależności w konstruktorze
  private taskService = inject(TasksService);

  add = output<{ title: string; summary: string; dueDate: string }>();
  
  onCancel() {
    this.close.emit();
  }

  onSubmit() 
  {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate,
      }, this.userId());
      this.close.emit();
  }


}

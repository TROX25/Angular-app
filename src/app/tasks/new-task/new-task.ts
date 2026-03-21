import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  cancel = output<void>();

  // Te dwie właściwości będą powiązane z polami formularza, więc ich wartości będą aktualizowane na bieżąco podczas wpisywania danych przez użytkownika.
  // NgModel -> wiazanie dwukirunkowe
  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  add = output<{ title: string; summary: string; dueDate: string }>();
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() 
  {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }


}

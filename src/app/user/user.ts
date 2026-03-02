import { Component, Input } from '@angular/core';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  selectUser() {
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  selectUser() {
  }
}

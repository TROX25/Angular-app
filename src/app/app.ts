import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-app');
  
  users = DUMMY_USERS;

  selectedUserId = signal<string | null>(null);


  selectUser(Id: string) 
  {
    this.selectedUserId.set(Id);
  }

  selectedUserName = computed(() => {
    const user = this.users.find(u => u.id === this.selectedUserId());
    return user!.name;
  });
}

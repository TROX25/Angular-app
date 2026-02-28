import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  // Dzieki computed(), mam dynamiczny element this.selectedUser(),
  // Jesli selectedUser() sie zmieni, to imagePath() tez sie zaktualizuje 
  imagePath = computed(() => {
    return 'assets/users/' + this.selectedUser().avatar;
  });

  selectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}

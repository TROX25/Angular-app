import { Component, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Inputs
  avatar = input.required<string>();
  name = input.required<string>();
  id = input.required<string>();
  // Inputs, other possibility with object instead of separate properties
  // user = input.required<{ id: string, name: string, avatar: string }>();

  // Outputs
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);
  // if using user object as input
  // imagePath = computed(() => `assets/users/${this.user().avatar}`);

  selectUser() {
    this.select.emit(this.id());
  }
}

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
  // Outputs
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.avatar()}`);

  selectUser() {
    this.select.emit(this.id());
  }
}

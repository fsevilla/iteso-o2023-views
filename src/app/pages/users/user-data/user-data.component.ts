import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  @Input('data') user: User = { name: '', email: '' }
  @Output() onUserReset: EventEmitter<void> = new EventEmitter();

  clearUser() {
    this.user = { name: '', email: '' }
    this.onUserReset.emit();
  }

}

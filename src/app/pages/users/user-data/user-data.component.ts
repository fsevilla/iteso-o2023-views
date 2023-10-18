import { Component, Input } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  @Input('data') user: User = { name: '', email: '' }

}

import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appLoginStatus]'
})
export class LoginStatusDirective {

  @Input() appLoginStatus: boolean = false;

  constructor() { }

  

}

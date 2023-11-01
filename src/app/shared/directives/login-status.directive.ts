import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TokenService } from '../services/token.service';

@Directive({
  selector: '[appLoginStatus]'
})
export class LoginStatusDirective implements OnInit {

  @Input() appLoginStatus: boolean = false;

  constructor(
    private tokenService: TokenService, 
    private templateRef: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.tokenService.loginStatus.subscribe((status: boolean) => {
      if(status === this.appLoginStatus) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
  

}

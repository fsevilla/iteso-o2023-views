import { Directive, Input, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnChanges {

  @Input() appHighlight: boolean = false;

  constructor(private elRef: ElementRef) { 
    console.log('Status: ', this.appHighlight);
  }

  ngOnInit() {
    console.log('Status: ', this.appHighlight);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlight) {
      this.elRef.nativeElement.style.backgroundColor = 'lightblue';
    } else {
      this.elRef.nativeElement.style.backgroundColor = 'transparent';
    }
  }

}

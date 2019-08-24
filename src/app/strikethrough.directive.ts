import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private elem:ElementRef) { 
    // this.elem.nativeElement.style.textDecoration ='linethrough'
  }
@HostListener("click")onClicks(){
  this.textDecoration("line-through")
}
@HostListener("dblclick")onDoubleClicks(){
  this.textDecoration("none")
}
  private textDecoration(action:string){
    this.elem.nativeElement.style.textDecoration=action; 
  }

}

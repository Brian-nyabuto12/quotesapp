import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appQuote]'
})
export class QuoteDirective {


  constructor(private elem:ElementRef) {
  
   }
@HostListener("click")  onClicks(){
  this.textDeco("blue")

}
  
  @HostListener("dblclick") onDoubleclicks(){
  this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }
 

}

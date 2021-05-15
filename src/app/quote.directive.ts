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
  textDeco(arg0: string) {
    throw new Error('Method not implemented.');
  }

  @HostListener("dblclick") onDoubleclicks(){
  this.textDeco("None")
  }
}

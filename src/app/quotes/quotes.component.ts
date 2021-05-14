import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Hamisi','Success','Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do','Nelson Mandera', new Date(2021,5,1),0,0),
    new Quote (2,'Gilbert','Education','I believe that education is all about being excited about something. Seeing passion and enthusiasm helps push an educational message.','Steve Irwin',new Date(2021,4,14),0,0),
    new Quote (3,'kelvin','Politics','Democracy arises out of the notion that those who are equal in any respect are equal in all respects; because men are equally free, they claim to be absolutely equal','Aristotle',new Date(2021,5,3),0,0),
    new Quote (4,'ann','Technology','The advance of technology is based on making it fit in so that you dont really even notice it, so it is part of everyday life','Bill Gates',new Date(2021,2,17),0,0),
    new Quote (5,'sharyn','Hardwork','Hard work is an essential element in tracking down and perfecting a strategy or in executing it','Charlie Munger',new Date(2021,3,1),0,0),
    new Quote (6,'kamau','Dreams and Goals','Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you','George Whitefield',new Date(2021,4,11),0,0)
  ];
  displayInformation(index){
    this.quotes[index].showInformation = !this.quotes[index].showInformation;
  }
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Quote } from '@angular/compiler';
import { Component, OnInit, Input, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead = new EventEmitter();
    constructor() { }

  ngOnInit(): void {
  }

}

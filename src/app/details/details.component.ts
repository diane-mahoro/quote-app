import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() comply = new EventEmitter<boolean>();
  complete(comp:boolean){
    this.comply.emit(comp);
  }
  constructor() { }

  ngOnInit() {
  }

}
 
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
  quotedelete(comp:boolean){
    this.comply.emit(comp);
  }
  a=0;
  b=0;
  yes(){
   this.a =this.a +1;
  }
  no(){
   this.b =this.b+1;
  }
  constructor() { }

  ngOnInit() {
  }

}
 
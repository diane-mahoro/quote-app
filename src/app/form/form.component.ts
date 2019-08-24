import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newquote = new Quote(0,"","",new Date(),"");
  @Output() addquote = new EventEmitter<Quote>();

  submitquote(){
    this.addquote.emit(this.newquote);
  }
  constructor() { }
 
  ngOnInit() {
  }

}

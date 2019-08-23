import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  array: Quote[] =[
  new Quote(1, 'mahoro diane', 'this is about business'),
  new Quote(1, 'mahoro diane', 'this is about business'),
  new Quote(1, 'mahoro diane', 'this is about business'),
  new Quote(1, 'mahoro diane', 'this is about business'),];
  toggleDetails(index){
    this.array[index].showDescription = !this.array[index].showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}

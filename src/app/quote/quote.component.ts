import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  array: Quote[] =[
    {id:1, name:'Watch finding Nemo', description:'lllll'},
    {id:2,name:'Buy Cookies',  description:'lllll'},
    {id:3,name:'Get new Phone Case',  description:'lllll'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

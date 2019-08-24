import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  array: Quote[] =[
    new Quote(1,'mahoro Diane','william','If you do not work hard its up to you'),
    new Quote(2,'Rurangwa Gloria','william','You have got what it takes'),
    new Quote(1,'Ishimwe Norbert','william','Education is the key tosuccess'),
  ];
  toggleDetails(index){
    this.array[index].showDescription = !this.array[index].showDescription;
  }
  complete(comply,index){
 if(comply){
   this.array.splice(index,1);
 }
  }
  constructor() { }

  ngOnInit() {
  }

}

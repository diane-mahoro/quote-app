import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  array: Quote[] =[
    new Quote(1,'mahoro Diane','william',new Date(2019,6,1),'If you do not work hard its up to you'),
    new Quote(2,'Rurangwa Gloria','william',new Date(2019,6,1),'You have got what it takes'),
    new Quote(1,'Ishimwe Norbert','william',new Date(2019,6,1),'Education is the key tosuccess'),
  ];
  addnewquote(quote){
    let quotelength = this.array.length;
    quote.id = quotelength + 1;
    quote.dueon = new Date(quote.dueon)
    this.array.push(quote)
  }
  toggleDetails(index){
    this.array[index].showDescription = !this.array[index].showDescription;
  }
  deletequote(comply,index){
 if(comply){
   let todelete = confirm(`Are you sure you want to delete ${this.array[index].description}?`)
   if(todelete){
this.array.splice(index,1)
   }
 }
  }
  // a=0;
  // b=0;
  // yes(){
  //  this.a =this.a+1;
  // }
  // no(){
  //   this.b= this.b + 1;
  // }
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Quote} from './quote';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: Quote[] =[
    {id:1, name:'Watch finding Nemo', description:'bussiness'},
    {id:2,name:'Buy Cookies',  description:'bussiness'},
    {id:3,name:'Get new Phone Case',  description:'bussiness'},
  ];
  title = 'Quote';
}
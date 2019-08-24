import { Component } from '@angular/core';
import { Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: Quote[] =[
    new Quote(1,'mahoro Diane','william','If you do not work hard its up to you'),
    new Quote(2,'Rurangwa Gloria','william','You have got what it takes'),
    new Quote(1,'Ishimwe Norbert','william','Education is the key tosuccess'),
  ];
  title = 'Quote';
}
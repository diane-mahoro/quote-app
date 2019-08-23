import { Component } from '@angular/core';
import { Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array: Quote[] =[
    new Quote(1,'mahoro','business'),
    new Quote(1,'mahoro','business'),
    new Quote(1,'mahoro','business')
  ];
  title = 'Quote';
}
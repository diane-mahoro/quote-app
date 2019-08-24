import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any,): number {
    let today:Date =new Date();
    let todaywithnotime:any = new Date(today.getFullYear(), today.getDate())
    var datedifference = Math.abs(value - todaywithnotime)
    const secondsInDay = 86400;
    var datedifferenceseconds = datedifference*0.001;
    var dateCounter = datedifferenceseconds/secondsInDay;
    if(dateCounter>=1 && value> todaywithnotime){
    return dateCounter;
    }
    else{
      return 0;
    }
    return null;
  }

}

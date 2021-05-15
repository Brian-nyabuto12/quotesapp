import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {


  transform(value :any): number {
    let today:Date = new Date();
    let todayWithNotime:any = new Date(today.getFullYear(),today.getMonth())
    var dateDifference =Math.abs(todayWithNotime - value)
    const secondsInAday= 86400;

    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds/secondsInAday;
     if(dateCounter >= 1 && todayWithNotime > value){
       return dateCounter;
     }
    else{
      return 0;
    }

  
  }

}

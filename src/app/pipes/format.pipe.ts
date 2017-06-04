import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe, DecimalPipe, LowerCasePipe, CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  datePipe = new DatePipe("en-US");
  lowerCasePipe = new LowerCasePipe();
  currencyPipe = new CurrencyPipe("en-US");
  //result:any;

  transform(value: any, args?: any): any {

    if(!value || !args) { return value; }

    var result = value;

    switch(args)
    {
      case 'date' : result = this.datePipe.transform(value); console.log("date " +result); break;
      case 'lowercase' : result = this.lowerCasePipe.transform(value); console.log("lowercase " +result); break;
      case 'currency' : result = this.currencyPipe.transform(value); console.log("currency " +result); break;
      //default:  this.result = value;
    }
    return result;
  }

}

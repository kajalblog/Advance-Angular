import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value:any,printval:any): any {
    if(value !='' && value!=undefined && value!=null)
    {
      return value
    }
    else{
      return printval
    }
    // return null;
  }

}

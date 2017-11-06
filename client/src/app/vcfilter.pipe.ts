import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vcfilter'
})
export class VcfilterPipe implements PipeTransform {

  transform(items: any[], location:string, focus:string, indication:string, investment:string): any {
    
    if (items && items.length){
      return items.filter(item =>{
          if (location && item.Location.toLowerCase().indexOf(location.toLowerCase()) === -1) {
              return false;
          }
          if (focus && item['Investment Focus'].toLowerCase().indexOf(focus.toString().toLowerCase()) === -1){
              return false;
          }
          if (indication && item['Prefered Indication'].toLowerCase().indexOf(indication.toLowerCase()) === -1){
              return false;
          }
          if (investment && item['Investment Stage'].toLowerCase().indexOf(investment.toLowerCase()) === -1){
            return false;
        }
          return true;
     })
  }
  else{
      return items;
  }
  }

}
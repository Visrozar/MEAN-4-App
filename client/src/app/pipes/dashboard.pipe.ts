import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboard'
})
export class DashboardPipe implements PipeTransform {

  transform(items: any[], location: any[], focus: any[], indication: any[], investment: any[]): any {

    if (items && items.length) {
        return items.filter(item => {
            if (item.Featured) {
                return true;
            }
            if ((location.length && !location.find(b => item.Location[0].includes(b)))) {
                return false;
            }
            if ((focus.length && !focus.find(b => item['Investment Focus'].includes(b)))) {
                return false;
            }
            if ((indication.length && !indication.find(b => item['Prefered Indication'].includes(b)))) {
                return false;
            }
            if ((investment.length && !investment.find(b => item['Investment Stage'].includes(b)))) {
                return false;
            }
            return true;
        });
    } else {
        return items;
    }
}

}

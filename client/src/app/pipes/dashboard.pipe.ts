import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashboard'
})
export class DashboardPipe implements PipeTransform {

  transform(items: any[], role: any[], sector: any[], indication: any[], stage: any[], finnacing: any[]): any {

    if (items && items.length) {
        return items.filter(item => {
            if (item.Featured) {
                return true;
            }
            if ((role.length && !role.find(b => item.role.includes(b)))) {
                return false;
            }
            if ((sector.length && !sector.find(b => item.sector.includes(b)))) {
                return false;
            }
            if ((indication.length && !indication.find(b => item.indication.includes(b)))) {
                return false;
            }
            if ((stage.length && !stage.find(b => item.stage.includes(b)))) {
                return false;
            }if ((finnacing.length && !finnacing.find(b => item.finnacing.includes(b)))) {
                return false;
            }
            return true;
        });
    } else {
        return items;
    }
}

}

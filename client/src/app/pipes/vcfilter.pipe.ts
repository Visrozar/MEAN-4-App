import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vcfilter'
})
export class VcfilterPipe implements PipeTransform {

    transform(items: any[], location: any[], focus: any[], indication: any[], investment: any[]): any {

        if (items && items.length) {
            return items.filter(item => {
                if (item.Featured === 'true') {
                    return true;
                }
                if ((location.length && !location.find(b => item.Location.includes(b)))) {
                    return false;
                }
                if ((focus.length && !focus.find(b => item.InvestmentFocus.includes(b)))) {
                    return false;
                }
                if ((indication.length && !indication.find(b => item.PreferedIndication.includes(b)))) {
                    return false;
                }
                if ((investment.length && !investment.find(b => item.InvestmentStage.includes(b)))) {
                    return false;
                }
                return true;
            });
        } else {
            return items;
        }
    }

}
import { Pipe, PipeTransform } from '@angular/core';
import { data } from '../common/data';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    transform(listdata: data[], filterName: string): data[] {
        if (!listdata || !filterName){
            return listdata;
        }
        return listdata.filter(data => 
            data.reportName.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()))
    }
}
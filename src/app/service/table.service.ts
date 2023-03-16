import { Injectable, } from '@angular/core';
import { data } from '../common/data';
import { Listdata } from '../common/listdata';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor() { }
  
  searchData(filterName: string){
    var listResult = Listdata;
    if(filterName != '') listResult = listResult.filter((listResult) => listResult.reportName.includes(filterName) || listResult.reportDecription.includes(filterName))
    console.log(listResult)
  }
  shareData = new Subject<any>();
  clearData = new Subject<any>();
  dataReset = new Subject<any>();
}

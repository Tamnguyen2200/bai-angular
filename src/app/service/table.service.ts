import { Injectable } from '@angular/core';
import { data } from '../common/data';
import { Listdata } from '../common/listdata';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor() { }
  filterName = new Subject<any>();
  getlistdat(): data[]{
    return Listdata;
  }
  clear(){
    // this.filterName = '';
  }
  search(){
    // this.filterName = '';
    Listdata
    console.log()
  }
  
}

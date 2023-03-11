import { Injectable } from '@angular/core';
import { data } from '../common/data';
import { Listdata } from '../common/listdata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  filterName!: string;
  constructor() { }
  
  getlistdat(): data[]{
    return Listdata;
  }
  clear(){
    this.filterName = '';
  }
  search(){
    this.filterName = '';
    Listdata
    console.log("ok")
  }
}

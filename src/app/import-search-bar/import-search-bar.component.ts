import { Component } from '@angular/core';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-import-search-bar',
  templateUrl: './import-search-bar.component.html',
  styleUrls: ['./import-search-bar.component.css']
})
export class ImportSearchBarComponent {
  constructor(private tableSevice: TableService){}
  filterName: string = '';
  ShareValue(){
    this.tableSevice.shareData.next(this.filterName);
  }
  Reset(){
    this.filterName = ''
    this.tableSevice.clearData.next([true,false]);
    this.tableSevice.dataReset.next('');
  }
}

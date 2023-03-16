import { Component } from '@angular/core';
import { listImport } from '../common/listdata'
import { dataImport } from '../common/data';
import { TableService } from '../service/table.service';

@Component({
  selector: 'app-table-import',
  templateUrl: './table-import.component.html',
  styleUrls: ['./table-import.component.css']
})
export class TableImportComponent {
  constructor(private tableService:TableService){}
  listData = listImport;
  filterName = '';
  ngOnInit(){
    this.tableService.shareData.subscribe(value =>{
      this.filterName = value
      if(this.filterName != '') this.listData = this.listData.filter((listResult) => listResult.importName.includes(this.filterName) || listResult.importDecription.includes(this.filterName))
      return this.listData
    })
    this.tableService.dataReset.subscribe(value =>{
      this.filterName = value
      this.listData = listImport
    })
  }
}

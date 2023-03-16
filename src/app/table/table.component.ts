import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


import { Listdata } from '../common/listdata';
import { data } from '../common/data';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../service/dialog.service';
import { TableService } from '../service/table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  value: string = '';
  displaydialog = DialogComponent;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialogService: DialogService,
    private tableService: TableService
    ){
    this.matIconRegistry.addSvgIcon(
      'xlsx',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/xlsx.svg')
    )
  };
  filterName = '';
  listdata = Listdata;
  ngOnInit(){
    this.tableService.shareData.subscribe(value =>{
      this.filterName = value
      if(this.filterName != '') this.listdata = this.listdata.filter((listResult) => listResult.reportName.includes(this.filterName) || listResult.reportDecription.includes(this.filterName))
      return this.listdata
    })
    this.tableService.dataReset.subscribe(value =>{
      this.filterName = value
      this.listdata = Listdata
    })
  }
}

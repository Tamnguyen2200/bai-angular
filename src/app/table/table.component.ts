import { Component, EventEmitter, Output } from '@angular/core';
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
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displaydialog =DialogComponent;
  popupState: boolean = false;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialogService: DialogService,
    public tableService: TableService
  ){
    this.matIconRegistry.addSvgIcon(
      'xlsx',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/xlsx.svg')
    )
  }
  listdata = Listdata;
  filterName = '';
  
}

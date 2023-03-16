import { Component, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { data } from '../common/data';
import { TableService } from '../service/table.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  filterName: string = '';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public tableService: TableService,
  ){
    this.matIconRegistry.addSvgIcon(
      'fillter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/fillter.svg')
    ),
    this.matIconRegistry.addSvgIcon(
      'Search_icon_white',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/Search_icon_white.svg')
    )
  }
  ShareValue(){
    this.tableService.shareData.next(this.filterName);
  }
  Reset(){
    this.filterName = ''
    this.tableService.clearData.next([true,false]);
    this.tableService.dataReset.next('');
  }
}

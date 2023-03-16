import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-import-exls',
  templateUrl: './import-exls.component.html',
  styleUrls: ['./import-exls.component.css']
})
export class ImportEXlsComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,){
    this.matIconRegistry.addSvgIcon(
      'xlsx',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/xlsx.svg')
    )
  }
  printa(){
    alert('you chose Download template')
  }
  printb(){
    alert('you chose Import Excel')
  }
}

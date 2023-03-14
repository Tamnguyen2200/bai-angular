import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrls: ['./import-page.component.css']
})
export class ImportPageComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,

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
}

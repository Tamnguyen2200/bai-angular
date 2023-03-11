import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'Search_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/Search_icon.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'Bell_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/Bell_icon.svg')
    )
  }
}

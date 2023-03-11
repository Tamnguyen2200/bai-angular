import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-leftbarside',
  templateUrl: './leftbarside.component.html',
  styleUrls: ['./leftbarside.component.css']
})
export class LeftbarsideComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      'Path21',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/SVGimg/Path21.svg')
    )
  }
}

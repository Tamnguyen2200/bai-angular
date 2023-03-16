import { Component } from '@angular/core';
import { DialogService } from '../service/dialog.service';

@Component({
  selector: 'app-export-exls',
  templateUrl: './export-exls.component.html',
  styleUrls: ['./export-exls.component.css']
})
export class ExportEXlsComponent {
  constructor(public dialogService: DialogService,){}
}

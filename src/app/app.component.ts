import { Component } from '@angular/core';
import { DialogService } from './service/dialog.service';
DialogService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'add-angular-into-project';
  constructor(public dialogService: DialogService,){}
}

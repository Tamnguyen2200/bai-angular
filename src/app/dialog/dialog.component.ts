import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
import { DialogService } from '../service/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  constructor(public dialogService: DialogService){

  }
  @Input() popupState: Boolean | undefined ;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  public closeDialog(): void { 
    this.close.emit()
    console.log()
  };
  ngOnInit() {

  } ;
  importRepot(Year:string,Month:string){
    alert(Month+'/'+Year)
  };
}

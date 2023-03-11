import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  isdisplay: boolean | undefined;
  constructor() {}
  OpenDialog(isdisplay: boolean){
    this.isdisplay = true
    console.log(this.isdisplay)
  }
  closeDialog(isdisplay: boolean){
    this.isdisplay = false
    console.log(this.isdisplay)
    console.log(this.isdisplay)
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('qrcode') qrcode: HTMLElement;
  public myAngularxQrCode: string = 'https://www.instagram.com/generaci.on/';
  qrToCreate:string;
  constructor() { }

  ngOnInit(): void {
  }

  createQR(){
    if(this.qrToCreate && this.qrToCreate.trim() != ''){
      this.myAngularxQrCode = this.qrToCreate.trim();
    }
  }
}

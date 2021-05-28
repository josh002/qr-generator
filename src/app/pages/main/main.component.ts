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
  qrToCreate: string;
  imgCreated: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  async createQR() {
    if (this.qrToCreate && this.qrToCreate.trim() != '') {
      this.myAngularxQrCode = this.qrToCreate.trim();
      const link = document.querySelector("a")
      const img = document.querySelector("img")
      const imgBase64 = img.src.split(';base64,')[1]
      const byteCharacters = atob(imgBase64)
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });
      console.log(blob);

      const imgUrl = URL.createObjectURL(blob)
      link.href = imgUrl;
      link.download = "img qr";
      this.imgCreated = true;
    }
  }
}

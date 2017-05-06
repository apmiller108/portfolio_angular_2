import { Component } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})

export class NameComponent {
  public supportsClipPath: boolean;
  public photo: string;
  private userAgent: string;
  private isChrome: boolean;
  private isFirefox: boolean;
  private isSafari: boolean;
  private isEdge: boolean;
  constructor() {
    this.userAgent = navigator.userAgent;
    this.isEdge = /Edge/.test(this.userAgent);
    this.isChrome = /Chrome/.test(this.userAgent) && !this.isEdge;
    this.isFirefox = /Firefox/.test(this.userAgent);
    this.isSafari = /Safari/.test(this.userAgent)
      && !this.isFirefox
      && !this.isChrome
      && !this.isEdge;
    this.supportsClipPath = this.isChrome;
    this.photo = require('../../assets/images/alex_miller.jpg');
  }
}

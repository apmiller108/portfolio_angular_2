import { Component } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})

export class NameComponent {
    public isChrome: boolean;
    public userAgent: string;
    constructor() {
        this.userAgent = navigator.userAgent;
        this.isChrome = /Chrome/.test(this.userAgent);
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})

export class NameComponent {
    public browser: String;
    constructor() {
        this.browser = navigator.userAgent;
    }
}

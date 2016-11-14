import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule { }

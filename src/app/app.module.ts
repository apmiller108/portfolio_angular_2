import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { IntroComponent }       from './intro/intro.component';
import { NameComponent }        from './name/name.component';
import { OpenSourceComponent }  from './open_source/open_source.component';
import { SpinnerComponent }     from './spinner/spinner.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    IntroComponent,
    NameComponent,
    OpenSourceComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
})
export class AppModule { }

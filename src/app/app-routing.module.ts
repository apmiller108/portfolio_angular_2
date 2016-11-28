import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent }       from './intro/intro.component';
import { OpenSourceComponent }  from './open_source/open_source.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'open_source', component: OpenSourceComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

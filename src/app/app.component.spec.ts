import { TestBed }          from '@angular/core/testing';
import { AppComponent }     from './app.component';
import { IntroComponent }   from './intro/intro.component';
import { NameComponent }    from './name/name.component';
// import { OpenSourceComponent } from './open_source/open_source.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF}      from '@angular/common';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IntroComponent,
        NameComponent
        // OpenSourceComponent
      ],
      imports: [AppRoutingModule],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent)
    .toBe(true, 'should create AppComponent');
  });

  it ('should render the router outlet', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let element = fixture.nativeElement;

    expect(element.querySelector('router-outlet')).not.toBeNull();
  });
});

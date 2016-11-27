import { TestBed }        from '@angular/core/testing';
import { AppComponent }   from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NameComponent }  from './name/name.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IntroComponent,
        NameComponent
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent)
    .toBe(true, 'should create AppComponent');
  });

  it ('should show the intro section', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let element = fixture.nativeElement;

    expect(element.querySelector('intro')).not.toBeNull();
  });
});

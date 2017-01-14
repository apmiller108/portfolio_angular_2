import { TestBed }        from '@angular/core/testing';
import { IntroComponent } from './intro.component';
import { NameComponent }  from '../name/name.component';

describe('Intro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IntroComponent,
        NameComponent
      ]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(IntroComponent);

    expect(fixture.componentInstance instanceof IntroComponent)
    .toBe(true, 'should create IntroComponent');
  });

  it ('shows the name', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('name');

    expect(element.innerText).not.toBeNull();
  });

  it ('shows the bio', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('.bio');

    expect(element.innerText).toEqual(
      'I build applications in Ruby on Rails and AngularJS in TDD style. ' +
      'I like learning new things, which lately has been Elixir, Phoenix and ' +
      'Angular 2.'
    );
  });

  it ('links to github', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('.github');

    expect(element.href).toEqual('https://github.com/apmiller108');
  });

  it ('links to linkedin', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('.linkedin');

    expect(element.href).toBe('https://www.linkedin.com/in/alex-miller-551b0b59');
  });

  it ('links to the blog', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('.linkedin');

    expect(element).not.toBeNull();
  });

  it ('link to open source projects', () => {
    let fixture = TestBed.createComponent(IntroComponent);
    let element = fixture.nativeElement.querySelector('.open-source');

    expect(element).not.toBeNull();
  });

  // it ('link to til', () => {
  //   let fixture = TestBed.createComponent(IntroComponent);
  //   let element = fixture.nativeElement.querySelector('.til');

  //   expect(element).not.toBeNull();
  // });
});

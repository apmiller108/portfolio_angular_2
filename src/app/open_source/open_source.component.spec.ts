import { TestBed }             from '@angular/core/testing';
import { OpenSourceComponent } from './open_source.component';

describe('Name', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [OpenSourceComponent]});
  });

  it ('is created', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);

    expect(fixture.componentInstance instanceof OpenSourceComponent)
    .toBe(true, 'should create OpenSourceComponent');
  });

  it ('has a link back to root', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let element = fixture.nativeElement.querySelector('a[routerlink="/"]');

    expect(element.innerText).toMatch('back');
  });

  it ('has a title link to astronomania-api', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let element = fixture.nativeElement.querySelector(
      'h2 > a[href="https://github.com/apmiller108/astronomania-api"]'
    );

    expect(element.innerText).toMatch('Astronomania Ruby on Rails API');
  });

  it ('has a title link to Google Sheets Appendroid ruby gem page', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let element = fixture.nativeElement.querySelector(
      'h2 > a[href="https://rubygems.org/gems/google_sheets_appendroid"]'
    );

    expect(element.innerText).toMatch('Google Sheets Appendroid');
  });

  it ('has a title link to Locotimezone ruby gem page', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let element = fixture.nativeElement.querySelector(
      'h2 > a[href="https://rubygems.org/gems/locotimezone"]'
    );

    expect(element.innerText).toMatch('Locotimezone');
  });

  it('has links to the repos for each project', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let elements = fixture.nativeElement.querySelectorAll(
      '.open-source > div > a'
    );

    expect(elements['0'].getAttribute('href')).
      toMatch('https://github.com/apmiller108/astronomania-api');
    expect(elements['1'].getAttribute('href')).
      toMatch('https://github.com/apmiller108/google_sheets_appendroid');
    expect(elements['2'].getAttribute('href')).
      toMatch('https://github.com/apmiller108/locotimezone');
  });
});

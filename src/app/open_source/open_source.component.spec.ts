import { TestBed }             from '@angular/core/testing';
import { OpenSourceComponent } from './open_source.component';

describe('Name', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [OpenSourceComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);

    expect(fixture.componentInstance instanceof OpenSourceComponent)
    .toBe(true, 'should create OpenSourceComponent');
  });

  it ('has a link back to root', () => {
    let fixture = TestBed.createComponent(OpenSourceComponent);
    let element = fixture.nativeElement.querySelector('a[routerlink="/"]');

    expect(element.innerText).toMatch('back');
  });
});

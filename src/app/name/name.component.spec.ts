import { TestBed }       from '@angular/core/testing';
import { NameComponent } from './name.component';

describe('Name', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [NameComponent]});
  });

  it ('is created', () => {
    let fixture = TestBed.createComponent(NameComponent);

    expect(fixture.componentInstance instanceof NameComponent)
    .toBe(true, 'should create NameComponent');
  });

  it ('shows the name', () => {
    // let fixture = TestBed.createComponent(NameComponent);
    // let element = fixture.nativeElement.querySelector('.name');

    // expect(element.innerText).toMatch('alex miller');
  });
});

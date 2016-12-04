import { TestBed }       from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';

describe('Name', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SpinnerComponent]});
  });

  it('is created', () => {
    let fixture = TestBed.createComponent(SpinnerComponent);

    expect(fixture.componentInstance instanceof SpinnerComponent)
      .toBe(true, 'create NameComponent');
  });
});

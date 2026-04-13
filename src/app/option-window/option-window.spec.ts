import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionWindow } from './option-window';

describe('OptionWindow', () => {
  let component: OptionWindow;
  let fixture: ComponentFixture<OptionWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

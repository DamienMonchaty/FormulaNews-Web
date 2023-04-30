import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaTestComponent } from './beta-test.component';

describe('BetaTestComponent', () => {
  let component: BetaTestComponent;
  let fixture: ComponentFixture<BetaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

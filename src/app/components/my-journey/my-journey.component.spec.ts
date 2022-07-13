import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJourneyComponent } from './my-journey.component';

describe('MyJourneyComponent', () => {
  let component: MyJourneyComponent;
  let fixture: ComponentFixture<MyJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

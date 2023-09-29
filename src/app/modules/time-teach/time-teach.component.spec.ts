import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTeachComponent } from './time-teach.component';

describe('TimeTeachComponent', () => {
  let component: TimeTeachComponent;
  let fixture: ComponentFixture<TimeTeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeTeachComponent]
    });
    fixture = TestBed.createComponent(TimeTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

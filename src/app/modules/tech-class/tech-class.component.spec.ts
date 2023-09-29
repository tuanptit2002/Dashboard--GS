import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechClassComponent } from './tech-class.component';

describe('TechClassComponent', () => {
  let component: TechClassComponent;
  let fixture: ComponentFixture<TechClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechClassComponent]
    });
    fixture = TestBed.createComponent(TechClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

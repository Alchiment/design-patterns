import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGoalComponent } from './info-goal.component';

describe('InfoGoalComponent', () => {
  let component: InfoGoalComponent;
  let fixture: ComponentFixture<InfoGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

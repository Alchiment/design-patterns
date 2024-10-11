import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResponsibilityComponent } from './single-responsibility.component';

describe('SingleResponsibilityComponent', () => {
  let component: SingleResponsibilityComponent;
  let fixture: ComponentFixture<SingleResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleResponsibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

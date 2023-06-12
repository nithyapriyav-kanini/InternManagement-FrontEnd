import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionComponent } from './add-solution.component';

describe('AddSolutionComponent', () => {
  let component: AddSolutionComponent;
  let fixture: ComponentFixture<AddSolutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSolutionComponent]
    });
    fixture = TestBed.createComponent(AddSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

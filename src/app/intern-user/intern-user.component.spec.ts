import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternUserComponent } from './intern-user.component';

describe('InternUserComponent', () => {
  let component: InternUserComponent;
  let fixture: ComponentFixture<InternUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternUserComponent]
    });
    fixture = TestBed.createComponent(InternUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

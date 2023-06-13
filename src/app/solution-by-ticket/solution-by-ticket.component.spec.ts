import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionByTicketComponent } from './solution-by-ticket.component';

describe('SolutionByTicketComponent', () => {
  let component: SolutionByTicketComponent;
  let fixture: ComponentFixture<SolutionByTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionByTicketComponent]
    });
    fixture = TestBed.createComponent(SolutionByTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

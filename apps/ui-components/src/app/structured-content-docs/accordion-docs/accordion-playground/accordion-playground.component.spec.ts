import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPlaygroundComponent } from './accordion-playground.component';

describe('AccordionPlaygroundComponent', () => {
  let component: AccordionPlaygroundComponent;
  let fixture: ComponentFixture<AccordionPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

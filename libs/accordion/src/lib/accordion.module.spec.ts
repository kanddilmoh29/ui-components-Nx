import { async, TestBed } from '@angular/core/testing';
import { AccordionModule } from './accordion.module';

describe('AccordionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AccordionModule).toBeDefined();
  });
});

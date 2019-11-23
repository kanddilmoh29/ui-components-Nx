import { async, TestBed } from '@angular/core/testing';
import { StructuredContentModule } from './structured-content.module';

describe('StructuredContentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StructuredContentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StructuredContentModule).toBeDefined();
  });
});

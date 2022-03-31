import { categoryService } from './categoria.service';
import { TestBed } from '@angular/core/testing';


describe('categoryService', () => {
  let service: categoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(categoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

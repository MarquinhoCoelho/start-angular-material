import { categoryComponent } from './category/category.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('categoryComponent', () => {
  let component: categoryComponent;
  let fixture: ComponentFixture<categoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ categoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(categoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

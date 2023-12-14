import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroDeleteComponent } from './livro-delete.component';

describe('LivroDeleteComponent', () => {
  let component: LivroDeleteComponent;
  let fixture: ComponentFixture<LivroDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroDeleteComponent]
    });
    fixture = TestBed.createComponent(LivroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

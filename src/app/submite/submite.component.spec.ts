import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmiteComponent } from './submite.component';

describe('SubmiteComponent', () => {
  let component: SubmiteComponent;
  let fixture: ComponentFixture<SubmiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

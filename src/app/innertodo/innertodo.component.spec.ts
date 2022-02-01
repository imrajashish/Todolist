import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnertodoComponent } from './innertodo.component';

describe('InnertodoComponent', () => {
  let component: InnertodoComponent;
  let fixture: ComponentFixture<InnertodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnertodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

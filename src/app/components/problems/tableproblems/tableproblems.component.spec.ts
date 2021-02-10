import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableproblemsComponent } from './tableproblems.component';

describe('TableproblemsComponent', () => {
  let component: TableproblemsComponent;
  let fixture: ComponentFixture<TableproblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableproblemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

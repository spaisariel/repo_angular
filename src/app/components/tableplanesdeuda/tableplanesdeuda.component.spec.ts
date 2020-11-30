import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableplanesdeudaComponent } from './tableplanesdeuda.component';

describe('TableplanesdeudaComponent', () => {
  let component: TableplanesdeudaComponent;
  let fixture: ComponentFixture<TableplanesdeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableplanesdeudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableplanesdeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

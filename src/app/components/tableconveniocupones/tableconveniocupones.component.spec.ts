import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableconveniocuponesComponent } from './tableconveniocupones.component';

describe('TableconveniocuponesComponent', () => {
  let component: TableconveniocuponesComponent;
  let fixture: ComponentFixture<TableconveniocuponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableconveniocuponesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableconveniocuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

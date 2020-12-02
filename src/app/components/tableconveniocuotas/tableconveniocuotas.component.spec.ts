import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableconveniocuotasComponent } from './tableconveniocuotas.component';

describe('TableconveniocuotasComponent', () => {
  let component: TableconveniocuotasComponent;
  let fixture: ComponentFixture<TableconveniocuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableconveniocuotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableconveniocuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

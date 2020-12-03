import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponescontainerComponent } from './cuponescontainer.component';

describe('CuponescontainerComponent', () => {
  let component: CuponescontainerComponent;
  let fixture: ComponentFixture<CuponescontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuponescontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponescontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

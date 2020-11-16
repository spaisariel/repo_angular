import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsecondComponent } from './loginsecond.component';

describe('LoginsecondComponent', () => {
  let component: LoginsecondComponent;
  let fixture: ComponentFixture<LoginsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

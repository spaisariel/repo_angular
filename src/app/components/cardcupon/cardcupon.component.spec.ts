import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcuponComponent } from './cardcupon.component';

describe('CardcuponComponent', () => {
  let component: CardcuponComponent;
  let fixture: ComponentFixture<CardcuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcuponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

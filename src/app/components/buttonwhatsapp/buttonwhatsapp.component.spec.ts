import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonwhatsappComponent } from './buttonwhatsapp.component';

describe('ButtonwhatsappComponent', () => {
  let component: ButtonwhatsappComponent;
  let fixture: ComponentFixture<ButtonwhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonwhatsappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonwhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.MsjComponent } from './home.msj.component';

describe('Home.MsjComponent', () => {
  let component: Home.MsjComponent;
  let fixture: ComponentFixture<Home.MsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home.MsjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.MsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMsjComponent } from './home.msj.component';

describe('Home.MsjComponent', () => {
  let component: HomeMsjComponent;
  let fixture: ComponentFixture<HomeMsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMsjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

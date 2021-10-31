import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirWarComponent } from './reservoir-war.component';

describe('ReservoirWarComponent', () => {
  let component: ReservoirWarComponent;
  let fixture: ComponentFixture<ReservoirWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirWarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservoirWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

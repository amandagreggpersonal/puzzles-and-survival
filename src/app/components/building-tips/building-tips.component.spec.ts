import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTipsComponent } from './building-tips.component';

describe('BuildingTipsComponent', () => {
  let component: BuildingTipsComponent;
  let fixture: ComponentFixture<BuildingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

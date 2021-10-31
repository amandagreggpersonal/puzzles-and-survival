import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaComponent } from './doa.component';

describe('DoaComponent', () => {
  let component: DoaComponent;
  let fixture: ComponentFixture<DoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

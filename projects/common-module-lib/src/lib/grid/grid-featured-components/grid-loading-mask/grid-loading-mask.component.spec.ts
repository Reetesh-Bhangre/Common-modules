import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLoadingMaskComponent } from './grid-loading-mask.component';

describe('GridLoadingMaskComponent', () => {
  let component: GridLoadingMaskComponent;
  let fixture: ComponentFixture<GridLoadingMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLoadingMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLoadingMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccessorFormComponent } from './control-value-accessor-form.component';

describe('ControlValueAccessorFormComponent', () => {
  let component: ControlValueAccessorFormComponent;
  let fixture: ComponentFixture<ControlValueAccessorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlValueAccessorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValueAccessorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

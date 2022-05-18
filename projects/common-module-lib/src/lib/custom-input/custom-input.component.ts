import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-lib-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() title: string = '';
  @Input() isMaterial: boolean = false;

  val = '';

  get value(): any {
    return this.val;
  }
  set value(val) {
    // this value is updated by programmatic changes
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn; //;(this.value);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState isDisabled', isDisabled);
  }
}

import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-lib-custom-time-picker',
  templateUrl: './custom-time-picker.component.html',
  styleUrls: ['./custom-time-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTimePickerComponent),
      multi: true,
    },
  ],
})
export class CustomTimePickerComponent implements OnInit, ControlValueAccessor {
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

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value;
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState isDisabled', isDisabled);
    // throw new Error('Method not implemented.');
  }
}

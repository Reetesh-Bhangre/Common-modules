import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-lib-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatePickerComponent),
      multi: true,
    },
  ],
})
export class CustomDatePickerComponent implements OnInit, ControlValueAccessor {
  public date1: any;

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

  onChange: any = () => {};
  onTouched: any = () => {};

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

  ngOnInit(): void {
    this.date1 = new Date();
  }
}

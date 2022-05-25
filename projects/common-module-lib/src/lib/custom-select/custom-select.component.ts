import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'common-lib-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomSelectComponent),
    },
  ],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  listItems = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'Node Js' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'PHP', disabled: true },
    { id: 5, name: 'Django' },
    { id: 6, name: 'Angular' },
    { id: 7, name: 'Vue' },
    { id: 8, name: 'ReactJs' },
  ];

  val = [];

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

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn; //;(this.value);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState isDisabled', isDisabled);
  }
}

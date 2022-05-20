import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomInputModule } from './../custom-input/custom-input.module';
import { CustomDatePickerModule } from './../custom-date-picker/custom-date-picker.module';
import { CustomSelectModule } from './../custom-select/custom-select.module';

import { ControlValueAccessorFormComponent } from './control-value-accessor-form.component';

@NgModule({
  declarations: [ControlValueAccessorFormComponent],
  imports: [
    CommonModule,
    CustomInputModule,
    CustomDatePickerModule,
    CustomSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ControlValueAccessorFormComponent],
})
export class ControlValueAccessorFormModule {}

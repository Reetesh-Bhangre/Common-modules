import { NgModule } from '@angular/core';

import { GridModule } from './grid/grid.module';
import { CustomInputModule } from './custom-input/custom-input.module';
import { CustomDatePickerModule } from './custom-date-picker/custom-date-picker.module';
import { CustomSelectModule } from './custom-select/custom-select.module';

import { ControlValueAccessorFormModule } from './control-value-accessor-form/control-value-accessor-form.module';

@NgModule({
  declarations: [],
  imports: [
    GridModule,
    CustomInputModule,
    CustomDatePickerModule,
    CustomSelectModule,
    ControlValueAccessorFormModule,
  ],
  exports: [
    GridModule,
    CustomInputModule,
    CustomDatePickerModule,
    CustomSelectModule,
    ControlValueAccessorFormModule,
  ],
})
export class CommonModuleLibModule {}

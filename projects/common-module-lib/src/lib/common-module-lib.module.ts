import { NgModule } from '@angular/core';

import { GridModule } from './grid/grid.module';
import { CustomInputModule } from './custom-input/custom-input.module';
import { CustomDatePickerModule } from './custom-date-picker/custom-date-picker.module';
import { ControlValueAccessorFormModule } from './control-value-accessor-form/control-value-accessor-form.module';

@NgModule({
  declarations: [],
  imports: [
    GridModule,
    CustomInputModule,
    CustomDatePickerModule,
    ControlValueAccessorFormModule,
  ],
  exports: [
    GridModule,
    CustomInputModule,
    CustomDatePickerModule,
    ControlValueAccessorFormModule,
  ],
})
export class CommonModuleLibModule {}

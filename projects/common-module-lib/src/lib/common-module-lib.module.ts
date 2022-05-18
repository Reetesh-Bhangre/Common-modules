import { NgModule } from '@angular/core';

import { GridModule } from './grid/grid.module';
import { CustomInputModule } from './custom-input/custom-input.module';
import { ControlValueAccessorFormComponent } from './control-value-accessor-form/control-value-accessor-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ControlValueAccessorFormComponent],
  imports: [GridModule, BrowserAnimationsModule, CustomInputModule],
  exports: [GridModule, BrowserAnimationsModule, CustomInputModule],
})
export class CommonModuleLibModule {}

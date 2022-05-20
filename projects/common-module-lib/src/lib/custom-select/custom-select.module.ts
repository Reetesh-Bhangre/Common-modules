import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { CustomSelectComponent } from './custom-select.component';

@NgModule({
  declarations: [CustomSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule],
  exports: [CustomSelectComponent],
})
export class CustomSelectModule {}

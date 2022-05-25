import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTimePickerComponent } from './custom-time-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CustomTimePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [CustomTimePickerComponent],
})
export class CustomTimePickerModule {}

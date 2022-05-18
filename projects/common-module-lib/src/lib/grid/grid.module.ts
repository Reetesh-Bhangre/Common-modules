import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule,
  ],
  exports: [GridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class GridModule {}

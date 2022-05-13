import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

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
  providers: [],
})
export class GridModule {}

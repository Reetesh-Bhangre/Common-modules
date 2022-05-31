import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

import { GridComponent } from './grid.component';
import { GridLoadingMaskComponent } from './grid-featured-component/grid-loading-mask/grid-loading-mask.component';

@NgModule({
  declarations: [GridComponent, GridLoadingMaskComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AgGridModule.withComponents([GridLoadingMaskComponent]),
    FormsModule,
  ],
  exports: [GridComponent, GridLoadingMaskComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class GridModule {}

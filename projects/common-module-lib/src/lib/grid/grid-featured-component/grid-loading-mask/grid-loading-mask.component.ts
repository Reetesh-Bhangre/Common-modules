import { Component, OnInit } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';
import { ILoadingOverlayParams } from 'ag-grid-community';

@Component({
  selector: 'common-lib-grid-loading-mask',
  templateUrl: './grid-loading-mask.component.html',
  styleUrls: ['./grid-loading-mask.component.scss'],
})
export class GridLoadingMaskComponent implements ILoadingOverlayAngularComp {
  agInit(params: ILoadingOverlayParams): void {
    console.log('Check loading mask component agInIt Params', params);
  }
}

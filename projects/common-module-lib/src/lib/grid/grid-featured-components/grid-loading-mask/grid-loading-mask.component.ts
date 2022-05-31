import { Component, OnInit } from '@angular/core';
import { ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ILoadingCellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'common-lib-grid-loading-mask',
  templateUrl: './grid-loading-mask.component.html',
  styleUrls: ['./grid-loading-mask.component.scss'],
})
export class GridLoadingMaskComponent
  implements ILoadingCellRendererAngularComp
{
  constructor() {}
  agInit(params: ILoadingCellRendererParams): void {}
}

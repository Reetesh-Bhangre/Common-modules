import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ILoadingCellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'common-lib-grid-loading-mask',
  templateUrl: './grid-loading-mask.component.html',
  styleUrls: ['./grid-loading-mask.component.scss'],
})
export class GridLoadingMaskComponent
  implements ILoadingCellRendererAngularComp, AfterViewInit
{
  @ViewChild('loadingSkeleton') loadingSkeletonEl: ElementRef;
  numberOfSkeletonRow: number = 1; // number of Skeleton row
  Arr = Array; // Array type captured in a variable
  constructor() {}
  agInit(params: ILoadingCellRendererParams): void {}

  ngAfterViewInit() {
    // Get the height of grid container
    const gridHeighttest =
      this.loadingSkeletonEl.nativeElement.getBoundingClientRect().top;

    // Get the height of loading Skeleton row
    const loadingSkeletonHeight =
      this.loadingSkeletonEl.nativeElement.offsetHeight;

    // Calculate how much row needed in grid viewport
    this.numberOfSkeletonRow = Math.trunc(
      gridHeighttest / loadingSkeletonHeight
    );
  }
}

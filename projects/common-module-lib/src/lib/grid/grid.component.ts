import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'common-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit, AfterViewInit {
  /****************************************************************/
  /******************************** List of public Variables ********************************/
  gridHeaderHeight: number = 34; // To set the specific height of header
  gridRowHeight: number = 34; // To set the specific height of header
  /****************************************************************/
  /******************************** List of ViewChild Variables ********************************/
  /**
   * gridContainerRefEl will help to get element reference of grid container
   */
  @ViewChild('gridContainerRef') gridContainerRefEl: ElementRef;
  /****************************************************************/
  /******************************** List of Input Variables ********************************/
  /**
   * fitToWindow default is true.
   * fitToWindow is used to set grid height as 100% of container height.
   */
  @Input() fitToWindow: boolean = true;

  /**
   * gridHeight default 500px.
   * gridHeight allowed us to set grid height in px as required.
   */
  @Input() gridHeight: string = '500px';

  /**
   * gridColumn default [].
   * gridColumn will help to configure the column on grid.
   */
  @Input() gridColumn: any[];

  /**
   * gridData default [].
   * gridData will assign the data to the grid.
   */
  @Input() gridData: any[];
  /**
   * gridDefaultColDef default {}.
   * Any configuration set inside gridDefaultColDef is apply on all the columns defined under gridColumn..
   */
  @Input() gridDefaultColDef: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    /**
     * Below code help to set the grid height conditionally.
     * If grid is fitToWindow, it fits the grid according to the browser window.
     * Else it sets the fix grid height default is 500px.
     */
    this.gridContainerRefEl.nativeElement.style.height = this.fitToWindow
      ? `calc(100vh - ${
          this.gridContainerRefEl.nativeElement.getBoundingClientRect().top + 17
        }px)`
      : this.gridHeight;
  }
}

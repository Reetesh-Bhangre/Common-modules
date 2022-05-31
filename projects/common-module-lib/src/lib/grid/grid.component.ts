import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import { GridLoadingMaskComponent } from './grid-featured-components/grid-loading-mask/grid-loading-mask.component';

@Component({
  selector: 'common-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, AfterViewInit {
  /****************************************************************/
  /******************************** List of public Variables ********************************/
  gridHeaderHeight: number = 34; // To set the specific height of header
  gridRowHeight: number = 34; // To set the specific height of header
  gridApi: any; // After the initialization of the grid, stored params.api into the gridApi.
  gridColumnApi: any; // After the initialization of the grid, stored params.columnApi into the gridColumnApi.
  gridSelectedRow: any; // Containes the selected row data in array form
  loadingOverlayComponent: any;
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
  /**
   * gridOptions default {}.
   * Any configuration set inside gridOptions is apply on all the grid that can be used instead of or in addition to the normal framework bindings.
   * gridOptions properties and callbacks used to configure the grid.
   */
  @Input() gridOptions: any;

  constructor() {
    this.loadingOverlayComponent = GridLoadingMaskComponent;
  }

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

  /**
   * When the grid is initialised, the gridReady event will fire.
   * Here we stored some of the grid API value into the variables
   */
  onGridReady(params) {
    this.gridApi = params.api; // stored params.api into the gridApi. It will be use After the initialization of the grid.
    this.gridColumnApi = params.columnApi; // stored params.columnApi into the gridColumnApi. It will be use After the initialization of the grid
    this.gridApi.showLoadingOverlay();
  }

  /**
   * When the grid Row is selected or deselected. The event will be trigger
   * Also update the gridSelectedRow variable
   */
  onRowSelected(event) {
    this.gridSelectedRow = this.gridApi.getSelectedNodes();
  }

  /**
   * When the grid Row is clicked. The event will be trigger
   * Here we deselecting the row if row is clicked 2nd time
   * It will call onRowSelected function automatically and update the gridSelectedRow array
   */
  onRowClicked(event) {
    // Checking the gridSelectedRow and its length
    if (this.gridSelectedRow && this.gridSelectedRow.length > 0) {
      // Using every method to iterate gridSelectedRow array and break when condition meet
      this.gridSelectedRow.every((rowData, index) => {
        // Finding the row by comparing the rowIndex value
        if (rowData.rowIndex === event.rowIndex) {
          this.gridSelectedRow[index].setSelected(false); // deselecting the selected rowusing setSelected method of Ag-grid.
          return false; // break the loop
        }
        return true; // continue the loop
      });
    }
  }
}

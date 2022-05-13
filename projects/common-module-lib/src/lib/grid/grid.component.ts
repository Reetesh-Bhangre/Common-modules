import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'common-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit, AfterViewInit {
  @ViewChild('gridContainerRef') gridContainerRefEl: ElementRef;

  public columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  /** List of Input Element */
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

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    debugger;
    this.gridContainerRefEl.nativeElement.style.height = this.fitToWindow
      ? `calc(100vh - ${
          this.gridContainerRefEl.nativeElement.getBoundingClientRect().top + 17
        }px)`
      : this.gridHeight;
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'common-lib-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
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

  // Input Element
  @Input() fitToWindow: boolean = true;

  //   @ViewChild('gridContainerRef') gridContainerRefEl: ElementRef;

  constructor() {}

  ngOnInit(): void {}
}

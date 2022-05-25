import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GridComponent } from './grid.component';
import { GridModule } from './grid.module';

import gridData from './client-data.json';

const gridColumn = [
  {
    headerName: '',
    maxWidth: 50,
    checkboxSelection: true,
  },
  {
    headerName: 'ID',
    maxWidth: 100,
    valueGetter: 'node.id',
  },
  {
    headerName: 'Account Id',
    field: 'AccountExecutiveId',
    maxWidth: 100,
    sortable: true,
  },
  {
    headerName: 'First Name',
    field: 'FirstName',
    sortable: true,
  },
  {
    headerName: 'Last Name',
    field: 'LastName',
    sortable: true,
  },
  {
    headerName: 'Email Address',
    field: 'Email',
  },
  {
    headerName: 'Phone Number',
    field: 'Phone',
  },
  {
    headerName: 'Start Date',
    field: 'StartDate',
  },
  {
    headerName: 'Created Date',
    field: 'CreatedDate',
  },
  {
    headerName: 'CreatedBy',
    field: 'Created By',
  },
  {
    headerName: 'Default Sales Office',
    field: 'DefaultSalesOffice',
  },
  {
    headerName: 'Default Sales Office Id',
    field: 'DefaultSalesOfficeId',
  },
];

const gridDefaultColDef = {
  minWidth: 100,
  maxWidth: 250,
  sortable: true,
  resizable: true,
};

export default {
  title: 'Component/Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [GridModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
      <common-lib-grid 
        [fitToWindow]="fitToWindow" 
        [gridHeight]="gridHeight" 
        [gridData]="gridData" 
        [gridColumn]="gridColumn"
        [gridDefaultColDef]="gridDefaultColDef"
      >
      </common-lib-grid>
      `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  fitToWindow: true, // Enables auto fit grid feature to the base Grid (grid only with no container). It fits the grid according to the browser window.
  gridHeight: '200px', // Provides the specific height to grid.
  gridData: gridData, // visual data into the grid.
  gridColumn: gridColumn, // the column configuration of grid.
  gridDefaultColDef: gridDefaultColDef, // Any configuration set inside gridDefaultColDef is apply on all the columns defined under gridColumn.
};

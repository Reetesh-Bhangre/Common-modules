import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PowerBiComponent } from './power-bi.component';
import { PowerBIModule } from './power-bi.module';

export default {
  title: 'Component/Power BI',
  component: PowerBiComponent,
  decorators: [
    moduleMetadata({
      imports: [PowerBIModule, BrowserAnimationsModule, FormsModule,
        ReactiveFormsModule, CommonModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
    <common-lib-power-bi></common-lib-power-bi>
  `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  Placeholder: 'First Name',
  isMaterial: true,
};

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CustomSelectComponent } from './custom-select.component';
import { CustomSelectModule } from './custom-select.module';

export default {
  title: 'Component/custom-select',
  component: CustomSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomSelectModule, BrowserAnimationsModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
    <common-lib-custom-select></common-lib-custom-select>
  `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  //   Placeholder: 'First Name',
  //   isMaterial: true,
};

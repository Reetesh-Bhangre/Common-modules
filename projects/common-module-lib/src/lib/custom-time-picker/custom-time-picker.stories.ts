import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CustomTimePickerComponent } from './custom-time-picker.component';
import { CustomTimePickerModule } from './custom-time-picker.module';

export default {
  title: 'Component/Time-Picker',
  component: CustomTimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomTimePickerModule, BrowserAnimationsModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
    <common-lib-custom-time-picker></common-lib-custom-time-picker>
  `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  //   Placeholder: 'First Name',
  //   isMaterial: true,
};

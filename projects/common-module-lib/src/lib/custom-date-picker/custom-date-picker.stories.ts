import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CustomDatePickerComponent } from './custom-date-picker.component';
import { CustomDatePickerModule } from './custom-date-picker.module';

export default {
  title: 'Component/Date-Picker',
  component: CustomDatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomDatePickerModule, BrowserAnimationsModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
    <common-lib-custom-date-picker></common-lib-custom-date-picker>
  `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  //   Placeholder: 'First Name',
  //   isMaterial: true,
};

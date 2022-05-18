import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CustomInputComponent } from './custom-input.component';
import { CustomInputModule } from './custom-input.module';

export default {
  title: 'Component/Input',
  component: CustomInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CustomInputModule, BrowserAnimationsModule],
      schemas: [],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: args,
  template: `
    <common-lib-custom-input [title]="Placeholder" [isMaterial]="isMaterial"></common-lib-custom-input>
  `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  Placeholder: 'First Name',
  isMaterial: true,
};

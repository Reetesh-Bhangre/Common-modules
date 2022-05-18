import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ControlValueAccessorFormComponent } from './control-value-accessor-form.component';
import { ControlValueAccessorFormModule } from './control-value-accessor-form.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { CustomInputComponent } from './../custom-input/custom-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Component/CVA Form',
  component: ControlValueAccessorFormComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        ControlValueAccessorFormModule,
        ReactiveFormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [],
      entryComponents: [],
    }),
  ],
} as unknown as Meta;

const TemplateDefault: Story = (args) => ({
  props: {},
  template: `
    <common-lib-control-value-accessor-form></common-lib-control-value-accessor-form>`,
});

export const defaultUses = TemplateDefault.bind({});

import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GridComponent } from './grid.component';
import { GridModule } from './grid.module';

export default {
  title: 'Component/Grid',
  component: GridComponent,
  imports: [GridModule],
} as Meta;

const Template = () => ({
  props: '',
  template: `
    <common-lib-grid></common-lib-grid>
  `,
});

export const Text = Template.bind({});

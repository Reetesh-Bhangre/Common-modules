import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GridComponent } from './grid.component';
import { GridModule } from './grid.module';

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
      <common-lib-grid [fitToWindow]="fitToWindow" [gridHeight]="gridHeight"></common-lib-grid>
      `,
});

export const defaultUses = TemplateDefault.bind({});
defaultUses.args = {
  fitToWindow: true,
  gridHeight: '200px',
};

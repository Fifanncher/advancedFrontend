import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Select} from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    {value: '1', content: 'Первый элемент'},
    {value: '2', content: 'Второй элемент'},
    {value: '3', content: 'Третий элемент'}
  ]
};

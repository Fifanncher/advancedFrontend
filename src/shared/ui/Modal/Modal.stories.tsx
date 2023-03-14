import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Modal} from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat unde eligendi et optio. Totam error tempora consequatur aspernatur atque nam suscipit cumque dolorem a, vitae in corporis odit nisi?'
};

// export const Dark = Template.bind({});
// Dark.args = {
//  isOpen: true,
//  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellat unde eligendi et optio. Totam error tempora consequatur aspernatur atque nam suscipit cumque dolorem a, vitae in corporis odit nisi?'
// };
// Dark.decorators = [ThemeDecorator(Theme.DARK)];

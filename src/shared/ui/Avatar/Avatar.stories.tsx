import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Avatar} from './Avatar';
import AvatarImg from './avatar.jpeg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarImg
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg
};

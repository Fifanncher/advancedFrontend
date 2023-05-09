import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Avatar} from './Avatar';

const avatarUrl = 'https://antislang.ru/wp-content/uploads/%D1%80%D0%BE%D1%84%D0%BB%D0%B0%D0%BD-%D0%B4%D0%BE%D0%B4%D0%B8%D0%BA.png';

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
  src: avatarUrl
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: avatarUrl
};

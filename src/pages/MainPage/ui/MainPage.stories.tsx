import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import MainPage from './MainPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/MainPage',
  component: MainPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof MainPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

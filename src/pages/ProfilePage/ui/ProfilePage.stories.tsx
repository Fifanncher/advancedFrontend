import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof ProfilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

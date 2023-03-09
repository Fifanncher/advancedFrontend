import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {AppLink, AppLinkTheme} from './AppLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/AppLink',
  component: AppLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
};

export const RedDark = Template.bind({});
RedDark.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

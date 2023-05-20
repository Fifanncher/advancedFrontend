import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';
import {Text, TextSize, TextTheme} from './Text';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'shared/Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test title',
  text: 'Test text'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Erorr test title',
  text: 'Error test text',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Test title'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Test text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Test title',
  text: 'Test text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Test title'
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Test text'
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Test title',
  text: 'Test text',
  size: TextSize.L
};

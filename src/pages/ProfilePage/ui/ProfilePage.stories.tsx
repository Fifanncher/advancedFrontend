import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
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
Light.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      first: 'Иван',
      lastname: 'Фифанн',
      age: 29,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Tyumen'
    }
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      first: 'Иван',
      lastname: 'Фифанн',
      age: 29,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Tyumen'
    }
  }
})];

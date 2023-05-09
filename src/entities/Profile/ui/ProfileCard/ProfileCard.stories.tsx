import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {ProfileCard} from './ProfileCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    first: 'Иван',
    lastname: 'Фифанн',
    age: 29,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Tyumen',
    avatar: 'https://antislang.ru/wp-content/uploads/%D1%80%D0%BE%D1%84%D0%BB%D0%B0%D0%BD-%D0%B4%D0%BE%D0%B4%D0%B8%D0%BA.png'
  }
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error'
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true
};

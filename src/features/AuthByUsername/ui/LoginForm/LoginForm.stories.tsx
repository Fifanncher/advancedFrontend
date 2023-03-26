import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/decorators/StoreDecorator';
import {LoginForm} from './LoginForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/LoginForm',
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {username: 'testuser', password: '123'}
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  loginForm: {username: 'testuser', password: '123', error: 'Error'}
})];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [StoreDecorator({
  loginForm: {isLoading: true}
})];

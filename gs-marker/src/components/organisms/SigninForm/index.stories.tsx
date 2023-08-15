import { Meta, StoryFn } from '@storybook/react';
import SigninForm from './index';

export default {
    title: 'Organisms/SigninForm',
    argTypes: {
        onSignin: {
            description: 'onSignin event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof SigninForm>;

const Template: StoryFn<typeof SigninForm> = (args) => <SigninForm {...args} />;
export const Form = Template.bind({});

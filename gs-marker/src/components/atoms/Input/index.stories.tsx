import { Meta, StoryFn } from '@storybook/react';
import Input from './index';

export default {
    title: 'Atoms/Input',
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            description: 'placeholder',
            table: {
                type: { summary: 'string' },
            },
        },
        hasBorder: {
            control: { type: 'boolean' },
            defaultValue: true,
            description: 'border flag',
            table: {
                type: { summary: 'boolean' },
            },
        },
        hasError: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'error flag',
            table: {
                type: { summary: 'boolean' },
            },
        },
    },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const NormalInput = Template.bind({});

export const ErrorInput = Template.bind({});
ErrorInput.args = { hasError: true, placeholder: 'mmm' };

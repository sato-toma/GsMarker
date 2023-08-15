import { Meta, StoryFn } from '@storybook/react';
import TextArea from './index';

export default {
    title: 'Atoms/TextArea',
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            description: 'placeholder',
            table: {
                type: { summary: 'string' },
            },
        },
        rows: {
            control: { type: 'number' },
            defaultValue: 5,
            description: 'rows',
            table: {
                type: { summary: 'number' },
            },
        },
        minRows: {
            control: { type: 'number' },
            defaultValue: 5,
            description: 'min rows',
            table: {
                type: { summary: 'number' },
            },
        },
        maxRows: {
            control: { type: 'number' },
            defaultValue: 10,
            description: 'max rows',
            table: {
                type: { summary: 'number' },
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
        onChange: {
            description: 'onChange event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = (args) => <TextArea {...args} />;

export const NormalTextArea = Template.bind({});

export const ErrorTextArea = Template.bind({});
ErrorTextArea.args = { hasError: true };

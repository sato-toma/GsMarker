import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './index';

export default {
    title: 'Molecules/Dropdown',
    argTypes: {
        options: {
            control: { type: 'array' },
            description: 'dropdown options',
            table: {
                type: { summary: 'array' },
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
        placeholder: {
            control: { type: 'text' },
            description: 'placeholder',
            table: {
                type: { summary: 'string' },
            },
        },
        value: {
            control: { type: 'text' },
            description: 'dropdown value',
            table: {
                type: { summary: 'string' },
            },
        },
        onChange: {
            description: 'event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    options: [
        { value: null, label: '-' },
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
};

export const InitialValue = Template.bind({});
InitialValue.args = {
    options: [
        { value: null, label: '-' },
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' },
        { value: 'three', label: 'Three' },
    ],
    placeholder: 'Please select items from the list',
    value: 'one',
};

export const Many = Template.bind({});
Many.args = {
    options: Array.from(Array(20), (_v, k) => {
        return { value: k.toString(), label: k.toString() };
    }),
    placeholder: 'Please select items from the list',
};

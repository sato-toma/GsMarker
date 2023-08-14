import { Meta, StoryFn } from '@storybook/react';
import Button from './index';

export default {
    title: 'Atoms/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
            defaultValue: 'primary',
            description: 'button variant',
            table: {
                type: { summary: 'primary | secondary' },
                defaultValue: { summary: 'primary' },
            },
        },
        children: {
            control: { type: 'text' },
            defaultValue: 'Button',
            description: 'button text',
            table: {
                type: { summary: 'string' },
            },
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'Disabled',
            table: {
                type: { summary: 'boolean' },
            },
        },
        width: {
            control: { type: 'number' },
            description: 'width',
            table: {
                type: { summary: 'number' },
            },
        },
        height: {
            control: { type: 'number' },
            description: 'height',
            table: {
                type: { summary: 'number' },
            },
        },
        onClick: {
            description: 'onClick event',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', children: 'Primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', children: 'Secondary' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, children: 'Disabled' };

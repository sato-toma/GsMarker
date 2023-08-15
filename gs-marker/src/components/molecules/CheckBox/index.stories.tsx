import { Meta, StoryFn } from '@storybook/react';
import CheckBox from './index';

export default {
    title: 'Molecules/CheckBox',
    argTypes: {
        label: {
            control: { type: 'text' },
            description: 'label',
            table: {
                type: { summary: 'text' },
            },
        },
        checked: {
            control: { type: 'boolean' },
            description: 'check flag',
            table: {
                type: { summary: 'number' },
            },
        },
        onChange: {
            description: 'eventhandler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof CheckBox>;

const Template: StoryFn<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Label' };

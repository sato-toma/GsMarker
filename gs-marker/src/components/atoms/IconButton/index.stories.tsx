import { Meta, StoryFn } from '@storybook/react';
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './';

export default {
    title: 'Atoms/IconButton',
    argTypes: {
        color: {
            control: { type: 'string' },
            description: 'icon color',
            table: {
                type: { summary: 'ThemeColors' },
            },
        },
        backgroundColor: {
            control: { type: 'color' },
            description: 'background color',
            table: {
                type: { summary: 'string' },
            },
        },
        size: {
            control: { type: 'number' },
            defaultValue: 24,
            description: 'icon size',
            table: {
                type: { summary: 'number' },
            },
        },
        onClick: {
            description: 'onClick event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof SearchIcon>;

const Template: StoryFn<typeof SearchIcon> = (args) => (
    <>
        <SearchIcon {...args} />
        <CloudUploadIcon {...args} />
        <PersonOutlineIcon {...args} />
    </>
);

export const NormalIconButton = Template.bind({});

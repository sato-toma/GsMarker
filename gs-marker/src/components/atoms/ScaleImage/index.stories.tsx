import { Meta, StoryFn } from '@storybook/react';
import ScaleImage from './index';

export default {
    title: 'Atoms/ScaleImage',
    argTypes: {
        src: {
            control: { type: 'text' },
            description: 'URL',
            table: {
                type: { summary: 'string' },
            },
        },
        width: {
            control: { type: 'number' },
            defaultValue: 320,
            description: 'width',
            table: {
                type: { summary: 'number' },
            },
        },
        height: {
            control: { type: 'number' },
            description: 'height',
            defaultValue: 320,
            table: {
                type: { summary: 'number' },
            },
        },
        containerWidth: {
            control: { type: 'number' },
            defaultValue: 320,
            description: 'width',
            table: {
                type: { summary: 'number' },
            },
        },
        conatinerHeight: {
            control: { type: 'number' },
            description: 'height',
            defaultValue: 320,
            table: {
                type: { summary: 'number' },
            },
        },
    },
} as Meta<typeof ScaleImage>;

const Template: StoryFn<typeof ScaleImage> = (args) => <ScaleImage {...args} />;

export const Normal = Template.bind({});
Normal.args = { src: '/images/sample/1.jpg' };

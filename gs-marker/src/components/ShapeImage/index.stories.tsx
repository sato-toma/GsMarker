import { Meta, StoryFn } from '@storybook/react';
import ShapeImage from './index';

export default {
    title: 'Atoms/ShapeImage',
    argTypes: {
        shape: {
            options: ['circle', 'square'],
            control: { type: 'radio' },
            defaultValue: 'square',
            description: 'shape',
            table: {
                type: { summary: 'circle | square' },
                defaultValue: { summary: 'square' },
            },
        },
        src: {
            control: { type: 'text' },
            description: 'url',
            table: {
                type: { summary: 'string' },
            },
        },
        width: {
            control: { type: 'number' },
            defaultValue: 320,
            description: 'widht',
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
    },
} as Meta<typeof ShapeImage>;

const Template: StoryFn<typeof ShapeImage> = (args) => <ShapeImage {...args} />;

export const Circle = Template.bind({});
Circle.args = {
    src: 'images/sample/7.jpg',
    shape: 'circle',
    width: 300,
    height: 300,
};

export const Square = Template.bind({});
Square.args = {
    src: 'images/sample/1.jpg',
    shape: 'square',
    width: 100,
    height: 100,
};

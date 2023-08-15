import { Meta, StoryFn } from '@storybook/react';
import Styled from 'styled-components';
import Spinner from './index';

export default {
    title: 'Atoms/Spinner',
    argTypes: {
        size: {
            control: { type: 'number' },
            defaultValue: 50,
            description: 'size',
            table: {
                type: { summary: 'number' },
            },
        },
        strokeWidth: {
            control: { type: 'number' },
            description: 'stroke width',
            defaultValue: 4,
            table: {
                type: { summary: 'number' },
            },
        },
        isAutoCentering: {
            control: { type: 'boolean' },
            defaultValue: false,
            description: 'centering flag',
            table: {
                type: { summary: 'boolean' },
            },
        },
    },
} as Meta<typeof Spinner>;

const SpinnerWrapper = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1199;
`;

const Template: StoryFn<typeof Spinner> = (args) => (
    <SpinnerWrapper>
        <Spinner {...args} />
    </SpinnerWrapper>
);

export const Normal = Template.bind({});

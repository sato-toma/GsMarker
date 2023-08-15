import { Meta, StoryFn } from '@storybook/react';
import UserProfile from './index';

export default {
    title: 'Organisms/UserProfile',
    argTypes: {
        variant: {
            options: ['normal', 'small'],
            control: { type: 'radio' },
            defaultValue: 'normal',
            description: 'image size',
            table: {
                type: { summary: 'normal | small' },
                defaultValue: { summary: 'normal' },
            },
        },
        username: {
            control: { type: 'text' },
            description: 'username',
            table: {
                type: { summary: 'string' },
            },
        },
        profileImageUrl: {
            control: { type: 'text' },
            description: 'profile image url',
            table: {
                type: { summary: 'string' },
            },
        },
        numberOfProducts: {
            control: { type: 'number' },
            description: 'number of products',
            table: {
                type: { summary: 'number' },
            },
        },
        description: {
            control: { type: 'text' },
            description: 'description for user',
            table: {
                type: { summary: 'string' },
            },
        },
    },
} as Meta<typeof UserProfile>;

const Template: StoryFn<typeof UserProfile> = (args) => (
    <UserProfile {...args} />
);

export const Small = Template.bind({});
Small.args = {
    imageSize: 'small',
    username: 'テストユーザー1',
    profileImageUrl: '/images/sample/1.jpg',
    numberOfProducts: 1000,
    description: 'サンプルテキスト1',
};

export const Normal = Template.bind({});
Normal.args = {
    imageSize: 'normal',
    username: 'テストユーザー2',
    profileImageUrl: '/images/sample/2.jpg',
    numberOfProducts: 1000,
    description: 'サンプルテキスト2',
};

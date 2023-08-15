import { Meta, StoryFn } from '@storybook/react';
import {
    PersonIcon,
    SearchIcon,
    ShoppingCartIcon,
} from './../../atoms/IconButton';
import BadgeIconButton from './index';

export default {
    title: 'Molecules/BadgeIconButton',
    argTypes: {
        icon: {
            control: { type: 'object' },
            description: 'icon',
            table: {
                type: { summary: 'object' },
            },
        },
        badgeContent: {
            control: { type: 'number' },
            description: 'badge counter',
            table: {
                type: { summary: 'number' },
            },
        },
        badgeBackgroundColor: {
            control: { type: 'color' },
            description: 'badge background color',
            table: {
                type: { summary: 'string' },
            },
        },
    },
} as Meta<typeof BadgeIconButton>;

const Template: StoryFn<typeof BadgeIconButton> = (args) => (
    <BadgeIconButton {...args} />
);

export const SearchBadgeIcon = Template.bind({});
SearchBadgeIcon.args = {
    icon: <SearchIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#ed9f28',
};

export const PersonBadgeIcon = Template.bind({});
PersonBadgeIcon.args = {
    icon: <PersonIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#d4001a',
};

export const ShoppingCartBadgeIcon = Template.bind({});
ShoppingCartBadgeIcon.args = {
    icon: <ShoppingCartIcon size={24} />,
    badgeContent: 1,
    badgeBackgroundColor: '#32bf00',
};

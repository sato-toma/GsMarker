import { Meta, StoryFn } from '@storybook/react';
import ProductCard from './index';

export default {
    title: 'Organisms/ProductCard',
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'product name',
            table: {
                type: { summary: 'string' },
            },
        },
        price: {
            control: { type: 'number' },
            description: 'product price',
            table: {
                type: { summary: 'number' },
            },
        },
        imageUrl: {
            control: { type: 'text' },
            description: 'product image url',
            table: {
                type: { summary: 'string' },
            },
        },
        blurDataUrl: {
            control: { type: 'text' },
            description: 'blur data url',
            table: {
                type: { summary: 'string' },
            },
        },
        variant: {
            options: ['listing', 'small', 'detail'],
            control: { type: 'radio' },
            defaultValue: 'listing',
            description: 'image size',
            table: {
                type: { summary: 'listing | small | detail' },
                defaultValue: { summary: 'primary' },
            },
        },
    },
} as Meta<typeof ProductCard>;

const Template: StoryFn<typeof ProductCard> = (args) => (
    <ProductCard {...args} />
);

export const Listing = Template.bind({});
Listing.args = {
    variant: 'listing',
    title: 'shoes',
    imageUrl: '/images/sample/1.jpg',
    price: 2000,
};

export const Small = Template.bind({});
Small.args = {
    variant: 'small',
    title: 'small image shoes',
    imageUrl: '/images/sample/2.jpg',
    price: 2000,
};

export const Detail = Template.bind({});
Detail.args = {
    variant: 'detail',
    title: 'detailed image shoes ',
    imageUrl: '/images/sample/3.jpg',
    price: 2000,
};

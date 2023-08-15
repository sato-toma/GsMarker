import { Meta, StoryFn } from '@storybook/react';
import CartProduct from './index';

export default {
    title: 'Organisms/CartProduct',
    argTypes: {
        productId: {
            control: { type: 'number' },
            description: 'product ID',
            table: {
                type: { summary: 'number' },
            },
        },
        title: {
            control: { type: 'text' },
            description: 'product title',
            table: {
                type: { summary: 'string' },
            },
        },
        imageUrl: {
            control: { type: 'text' },
            description: 'product image url',
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
        onBuyButtonClick: {
            description: 'onBuyButtonClick event handler',
            table: {
                type: { summary: 'function' },
            },
        },
        onRemoveButtonClick: {
            description: 'onRemoveButtonClick event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof CartProduct>;

const Template: StoryFn<typeof CartProduct> = (args) => (
    <CartProduct {...args} />
);

export const NiceShoes = Template.bind({});
NiceShoes.args = {
    productId: 1,
    imageUrl: '/images/sample/1.jpg',
    title: 'shoes',
    price: 320,
};

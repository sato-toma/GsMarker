import { Meta, StoryFn } from '@storybook/react';
import ProductForm from './index';

export default {
    title: 'Organisms/ProductForm',
    argTypes: {
        onProductSave: {
            description: 'onProductSave event handler',
            table: {
                type: { summary: 'function' },
            },
        },
    },
} as Meta<typeof ProductForm>;

const Template: StoryFn<typeof ProductForm> = (args) => (
    <ProductForm {...args} />
);
export const Form = Template.bind({});
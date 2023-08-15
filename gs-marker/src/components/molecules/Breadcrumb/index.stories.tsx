import { Meta } from '@storybook/react';
import BreadcrumbItem from './../../atoms/BreadcrumbItem';
import Breadcrumb from './index';

export default { title: 'Molecules/Breadcrumb' } as Meta<typeof Breadcrumb>;

export const Standard = () => (
    <Breadcrumb>
        <BreadcrumbItem>
            <a href="#">Top</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
            <a href="#">Clothes</a>
        </BreadcrumbItem>
        <BreadcrumbItem>Item</BreadcrumbItem>
    </Breadcrumb>
);

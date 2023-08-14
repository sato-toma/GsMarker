import { Meta } from '@storybook/react';
import BreadcrumbItem from './index';

export default { title: 'Atoms/BreadcrumbItem' } as Meta<typeof BreadcrumbItem>;

export const Standard = () => (
    <div>
        <BreadcrumbItem>Root</BreadcrumbItem>
        <BreadcrumbItem>Trunk</BreadcrumbItem>
        <BreadcrumbItem>Leaf</BreadcrumbItem>
    </div>
);

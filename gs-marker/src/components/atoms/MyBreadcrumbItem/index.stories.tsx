import { ComponentMeta } from '@storybook/react';
import React from 'react';
import MyBreadcrumbItem from './index';

export default { title: 'Atoms/BreadcrumbItem' } as ComponentMeta<typeof MyBreadcrumbItem>;

export const Standard = () => (
  <div>
    <MyBreadcrumbItem>Item 1</MyBreadcrumbItem>
    <MyBreadcrumbItem>Item 2</MyBreadcrumbItem>
    <MyBreadcrumbItem>Item 3</MyBreadcrumbItem>
  </div>
);

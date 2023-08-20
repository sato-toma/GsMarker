import { ComponentMeta } from '@storybook/react';
import React from 'react';
import MyBreadcrumbItem from './../../../components/atoms/MyBreadcrumbItem';
import Breadcrumb from './index';

export default { title: 'Molecules/Breadcrumb' } as ComponentMeta<typeof Breadcrumb>;

export const Standard = () => (
  <Breadcrumb>
    <MyBreadcrumbItem>
      {/* <a href="#">Top</a> */}
      Top
    </MyBreadcrumbItem>
    <MyBreadcrumbItem>
      {/* <a href="#">Clothes</a> */}
      Clothes
    </MyBreadcrumbItem>
    <MyBreadcrumbItem>Item</MyBreadcrumbItem>
  </Breadcrumb>
);

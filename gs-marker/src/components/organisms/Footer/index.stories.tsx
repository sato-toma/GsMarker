import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Footer from './';

export default { title: 'Organisms/Footer' } as ComponentMeta<typeof Footer>;

export const Standard = () => <Footer />;

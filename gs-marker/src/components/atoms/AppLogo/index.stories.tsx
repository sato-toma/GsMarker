import { ComponentMeta } from '@storybook/react';
import React from 'react';
import AppLogo from './index';

export default { title: 'Atoms/AppLogo' } as ComponentMeta<typeof AppLogo>;

export const Logo = () => <AppLogo />;

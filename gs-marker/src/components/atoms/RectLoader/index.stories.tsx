import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import RectLoader from './index';

export default {
  title: 'Atoms/RectLoader',
  argTypes: {
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof RectLoader>;

const Template: ComponentStory<typeof RectLoader> = (args) => <RectLoader {...args} />;

export const Normal = Template.bind({});

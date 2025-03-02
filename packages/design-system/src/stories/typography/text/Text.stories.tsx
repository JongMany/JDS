import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@/components/typography';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'div', 'h1', 'h2', 'h3', 'h4'],
      defaultValue: 'span',
    },
    lineClamp: {
      control: 'text', // lineClamp는 문자열로 받도록 설정
      defaultValue: '3', // 문자열로 기본값 설정
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'bold'],
      defaultValue: 'medium',
    },
    children: {
      control: 'text',
      defaultValue: 'This is a text component with various properties.',
    },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default: StoryObj<TextProps> = Template.bind({});
Default.args = {
  children: 'This is the default text with no special formatting.',
};

export const WithLineClamp: StoryObj<TextProps> = Template.bind({});
WithLineClamp.args = {
  lineClamp: '1', // lineClamp 값은 문자열로 설정
  children:
    'This text is line-clamped to 1 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
};

export const LargeText: StoryObj<TextProps> = Template.bind({});
LargeText.args = {
  size: 'xl',
  children: 'This is large text.',
};

export const BoldText: StoryObj<TextProps> = Template.bind({});
BoldText.args = {
  fontWeight: 'bold',
  children: 'This is bold text.',
};

export const CustomElement: StoryObj<TextProps> = Template.bind({});
CustomElement.args = {
  as: 'p',
  children: 'This text is rendered as an h2 element.',
};

export const SmallTextWithLineClamp: StoryObj<TextProps> = Template.bind({});
SmallTextWithLineClamp.args = {
  size: 'sm',
  lineClamp: '2', // lineClamp 값은 문자열로 설정
  children:
    'This is small text with line clamp applied to it. It will show only two lines of text.',
};

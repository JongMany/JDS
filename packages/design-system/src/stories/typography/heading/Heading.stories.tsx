import { Meta, StoryFn, StoryObj } from '@storybook/react/*';
import { Heading, HeadingProps } from '../../../components/typography';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      defaultValue: 'h1',
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
      defaultValue: 'md',
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['light', 'normal', 'medium', 'bold'],
      },
      defaultValue: 'medium',
    },
    children: {
      control: 'text',
      defaultValue: 'Heading text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

// Template 작성
const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

// 다양한 스토리 추가
export const Default: StoryObj<HeadingProps> = Template.bind({});
Default.args = {
  as: 'h1',
  size: 'md',
  fontWeight: 'medium',
  children: 'Default Heading',
};

export const H2: StoryObj<HeadingProps> = Template.bind({});
H2.args = {
  as: 'h2',
  size: 'lg',
  fontWeight: 'bold',
  children: 'This is a Heading 2',
};

export const CustomSize: StoryObj<HeadingProps> = Template.bind({});
CustomSize.args = {
  as: 'h3',
  size: 'sm',
  fontWeight: 'normal',
  children: 'Small Heading',
};

export const CustomFontWeight: StoryObj<HeadingProps> = Template.bind({});
CustomFontWeight.args = {
  as: 'h4',
  size: 'md',
  fontWeight: 'semibold',
  children: 'Light Font Weight',
};

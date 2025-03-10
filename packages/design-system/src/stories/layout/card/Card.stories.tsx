import type { CardProps } from '../../../components/layout';

import { Meta, StoryObj } from '@storybook/react/*';

import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
} from '../../../components/layout';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    as: {
      control: 'select',
      options: ['article', 'section', 'div'],
    },
    minW: {
      control: 'text',
    },
    minH: {
      control: 'text',
    },
    maxW: {
      control: 'text',
    },
    maxH: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ✅ 기본 Card 스토리
export const Default: Story = (props: Partial<CardProps<'article'>>) => {
  return (
    <Card {...props} style={{ padding: '20px', border: '1px solid #ddd' }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>123</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  );
};

Default.args = {
  as: 'article',
  minW: '200px',
  minH: '150px',
  maxW: '400px',
  maxH: '300px',
};

export const CompoundPattern: Story = (
  props: Partial<CardProps<'article'>>,
) => {
  return (
    <Card {...props} style={{ padding: '20px', border: '1px solid #ddd' }}>
      <Card.Header>Card Title</Card.Header>
      <Card.Body>123</Card.Body>
      <Card.Footer>Card Footer</Card.Footer>
    </Card>
  );
};

CompoundPattern.args = {
  as: 'article',
  minW: '200px',
  minH: '150px',
  maxW: '400px',
  maxH: '300px',
};

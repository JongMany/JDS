import type { ImageProps } from '@/components/image/types';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Image } from '@/components/image';

// 스토리북 메타데이터 설정
export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    fallbackSrc: { control: 'text' },
    alt: { control: 'text' },
    borderRadius: { control: 'text' },
    boxSize: { control: 'text' },
    fit: { control: 'select', options: ['contain', 'cover'] },
    aspectRatio: { control: 'number' },
    quality: { control: 'number' },
    format: {
      control: 'select',
      options: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    },
    // 'srcSetWidths' 수정: array 대신 number[]로 처리
    srcSetWidths: { control: 'object' }, // control로 array 대신 object를 사용
  },
} as Meta;

// 기본 이미지 컴포넌트 템플릿
const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;
// https://source.unsplash.com/random/300×300

// 기본 스토리
export const Default: StoryObj<ImageProps> = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/400/300', // 기본 이미지 경로
  fallbackSrc: 'https://picsum.photos/200/300', // 대체 이미지 경로
  alt: 'Sample image', // 이미지 alt 속성
  width: '400px',
  height: '300px',
  borderRadius: '8px',
  boxSize: '300px',
  fit: 'cover', // object-fit 설정
  aspectRatio: 16 / 9, // 비율 설정
  quality: 85,
  format: 'webp', // 최적화 포맷
  srcSetWidths: [400, 800, 1200], // 다양한 해상도에 맞는 srcSet 설정
};

// 다양한 해상도와 품질 설정을 가진 또 다른 스토리
export const HighQuality: StoryObj<ImageProps> = Template.bind({});
HighQuality.args = {
  src: 'https://picsum.photos/400/300',
  fallbackSrc: 'https://picsum.photos/200/300',
  alt: 'High-quality image',
  width: '600px',
  height: '450px',
  borderRadius: '12px',
  boxSize: '100%',
  fit: 'contain',
  aspectRatio: 16 / 9,
  quality: 100,
  format: 'webp',
  srcSetWidths: [600, 1200, 1800],
};

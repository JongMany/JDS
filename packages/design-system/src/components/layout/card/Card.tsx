import type { CardProps } from '@/components/layout/card/types';
import type { RefType } from '@/types';

import { clsx } from 'clsx';
import React from 'react';

import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';

import { BaseStyle } from '@/styles/css';
import { StyleSprinkles } from '@/styles/sprinkle';
import { extractSprinkleProps } from '@/utils';

const Card: React.FC<CardProps & RefType<HTMLElement>> = (props) => {
  const {
    as = 'article',
    children,
    minW,
    minH,
    maxW,
    maxH,
    ref,
    align = 'vertical',
    ...rest
  } = props;

  const dynamicStyle = {
    ...(props.style ?? {}), // 기존 스타일 유지
    ...(minW ? { minWidth: minW } : {}),
    ...(minH ? { minHeight: minH } : {}),
    ...(maxW ? { maxWidth: maxW } : {}),
    ...(maxH ? { maxHeight: maxH } : {}),
  };

  const ALLOWED_CHILDREN = [CardHeader, CardBody, CardFooter];
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement,
  );

  // Card.Header, Card.Body, Card.Footer만 허용하도록 PropTypes 검사
  const foundComponents = validChildren.map((child) => {
    if (!ALLOWED_CHILDREN.includes(child.type as any)) {
      throw new Error(
        '🚨 Card 컴포넌트의 직속 자식은 `CardHeader, CardBody, CardFooter`만 허용됩니다.',
      );
    }
    return child.type;
  });

  // // ✅ 허용된 순서: [CardHeader → CardBody → CardFooter] (하나 이상 없어도 가능)
  // const correctOrder = foundComponents
  //   .slice()
  //   .sort(
  //     (a, b) =>
  //       ALLOWED_CHILDREN.indexOf(a as any) - ALLOWED_CHILDREN.indexOf(b as any)
  //   );

  // if (JSON.stringify(foundComponents) !== JSON.stringify(correctOrder)) {
  //   throw new Error(
  //     "🚨 Card 내부 컴포넌트 순서는 `CardHeader → CardBody → CardFooter` 순이어야 합니다."
  //   );
  // }

  return React.createElement(
    as,
    {
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      ...rest,
      style: {
        ...dynamicStyle,
        display: 'flex',
        flexDirection: align === 'vertical' ? 'column' : 'row',
      },
      ref,
      role: 'group',
      'aria-labelledby': 'card-title',
      'aria-describedby': 'card-content',
    },
    children,
  );
};

export { Card };

'use client';
import type { ImageProps } from '@/components/image/types';
import type { RefType } from '@/types';

import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import { BaseStyle } from '../../styles/css/base.css';

const ImageComponent = (props: ImageProps & RefType<HTMLImageElement>) => {
  const {
    src,
    fallbackSrc,
    borderRadius = '0px',
    boxSize = '100%',
    fit,
    ref,
    height,
    width,
    aspectRatio,
    alt,
    quality = 100,
    format = 'webp',
    srcSetWidths,
    ...rest
  } = props;

  const [currentSrc, setCurrentSrc] = useState(src);

  const handleImageError = () => {
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc); // fallbackSrc로 변경
    }
  };

  const [srcSet, setSrcSet] = useState<string>('');

  // 이미지 리사이징 및 최적화를 처리하는 함수
  const resizeImage = (
    image: HTMLImageElement,
    width: number,
    format: string,
    quality: number,
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Failed to get canvas context'));

      // 이미지를 canvas에 맞게 그리기
      canvas.width = width;
      canvas.height = (image.height * width) / image.width; // 비율 유지

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Blob URL로 이미지를 변환 (Base64 대신 Blob 사용)
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob); // Blob URL 생성
            resolve(url);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        `image/${format}`,
        quality / 100,
      );
    });
  };

  // srcSet 생성
  const generateSrcSet = async () => {
    const image = new Image();
    image.crossOrigin = 'anonymous'; // CORS 허용

    image.src = src;

    image.onload = async () => {
      const optimizedImages = srcSetWidths
        ? await Promise.all(
            srcSetWidths.map(async (width) => {
              const optimizedImage = await resizeImage(
                image,
                width,
                format,
                quality,
              );
              return `${optimizedImage} ${width}w`; // srcSet에 추가
            }),
          )
        : [];

      setSrcSet(optimizedImages.join(', ')); // srcSet 설정
    };
  };

  useEffect(() => {
    generateSrcSet();
  }, [src, srcSetWidths, format, quality]);

  return (
    <img
      {...rest}
      src={currentSrc}
      srcSet={srcSet}
      alt={alt}
      width={width ?? boxSize}
      height={height ?? boxSize}
      onError={handleImageError}
      style={{
        borderRadius: borderRadius === 'full' ? '50%' : borderRadius,
        width: width ?? boxSize,
        height: height ?? boxSize,
        ...(fit && { objectFit: fit }),
        ...(aspectRatio && { aspectRatio: `${aspectRatio} / 1` }),
      }}
      className={clsx([BaseStyle, props.className])}
      ref={ref}
      loading="lazy"
    />
  );
};

export { ImageComponent as Image };

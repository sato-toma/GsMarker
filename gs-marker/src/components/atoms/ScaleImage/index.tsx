import Image, { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ScaleEffectImage = styled(Image)`
  overflow: hidden;
  transition: transform 0.5s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

/**
 * スケールイメージ
 */
const ScaleImage = ({ ...props }: Omit<ImageProps, 'quality'>) => (
  <ScaleEffectImage
    quality="85"
    // alt={props.alt ?? 'Product Image'}
    height={props.height ?? 320}
    width={props.width ?? 320}
    {...props}
  />
);

export default ScaleImage;

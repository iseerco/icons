import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltFromBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,21V6h4.5L12.983,.445c-.525-.593-1.442-.593-1.966,0L6,6h4.5v15H3v3H21v-3h-7.5Z"/></svg>
);

FiBsArrowAltFromBottom.displayName = 'FiBsArrowAltFromBottom';

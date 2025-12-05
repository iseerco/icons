import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBanner4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m24,6h-7v2H7v-2H0l3.111,4L0,14h4v4h16v-4h4l-3.111-4,3.111-4Zm-7,9H7v-4h10v4Z"/>
</svg>
);

FiBsBanner4.displayName = 'FiBsBanner4';

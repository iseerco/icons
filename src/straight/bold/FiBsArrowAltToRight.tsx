import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowAltToRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,12c0,.36-.148,.721-.445,.983l-5.555,5.017v-4.5H0v-3H15V6l5.555,5.017c.297,.262,.445,.623,.445,.983Zm0-9V21h3V3h-3Z"/></svg>
);

FiBsArrowAltToRight.displayName = 'FiBsArrowAltToRight';

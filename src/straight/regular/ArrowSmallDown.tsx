import React from 'react';
import type { IconProps } from '../../types';

export const ArrowSmallDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M16.293,12.707,13,16V6H11V16L7.707,12.707,6.293,14.121l4.293,4.293a2,2,0,0,0,2.828,0l4.293-4.293Z"/></g></svg>
);

ArrowSmallDown.displayName = 'ArrowSmallDown';

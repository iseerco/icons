import React from 'react';
import type { IconProps } from '../../types';

export const PlusSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><polygon points="13 11 13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11"/></g></svg>
);

PlusSmall.displayName = 'PlusSmall';

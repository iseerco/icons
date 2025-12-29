import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowUpRightAndArrowDownLeftFromCenter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.061,15.061l-5.939,5.939h3.879v3H2.5c-1.379,0-2.5-1.122-2.5-2.5v-6.5H3v3.879l5.939-5.939,2.121,2.121ZM21.5,0h-6.5V3h3.879l-5.939,5.939,2.121,2.121,5.939-5.939v3.879h3V2.5c0-1.378-1.121-2.5-2.5-2.5Z"/></svg>
);

FiBsArrowUpRightAndArrowDownLeftFromCenter.displayName = 'FiBsArrowUpRightAndArrowDownLeftFromCenter';

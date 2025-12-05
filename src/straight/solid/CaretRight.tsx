import React from 'react';
import type { IconProps } from '../../types';

export const CaretRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z"/></svg>
);

CaretRight.displayName = 'CaretRight';

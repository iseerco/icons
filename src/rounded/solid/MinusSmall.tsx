import React from 'react';
import type { IconProps } from '../../types';

export const MinusSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7,11a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/></svg>
);

MinusSmall.displayName = 'MinusSmall';

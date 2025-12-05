import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCaretDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M5,9H19l-6.293,6.293a1,1,0,0,1-1.414,0Z"/></svg>
);

FiBsCaretDown.displayName = 'FiBsCaretDown';

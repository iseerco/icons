import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCaretUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,15.293H5L11.293,9a1,1,0,0,1,1.414,0Z"/></svg>
);

FiBsCaretUp.displayName = 'FiBsCaretUp';

import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMenuDotsVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><circle cx="12" cy="2.5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="21.5" r="2.5"/></svg>
);

FiBsMenuDotsVertical.displayName = 'FiBsMenuDotsVertical';

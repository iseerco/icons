import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSortSizeUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,15h8v8h-8V15ZM14,1V11h10V1H14ZM4.74,.72L.45,4.93l2.1,2.14,2.45-2.4V24h3V4.71l2.4,2.4,2.12-2.12L8.27,.73c-.97-.97-2.56-.97-3.52-.01Z"/></svg>
);

FiBsSortSizeUp.displayName = 'FiBsSortSizeUp';

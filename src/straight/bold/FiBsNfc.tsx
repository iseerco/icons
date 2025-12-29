import React from 'react';
import type { IconProps } from '../../types';

export const FiBsNfc: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5V21ZM14.88,5h4.12v14H5V5h6.62l-3.62,3.62v7.38h8v-7.88l-3,3v2.88h-3v-4.12l4.88-4.88Z"/></svg>
);

FiBsNfc.displayName = 'FiBsNfc';

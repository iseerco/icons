import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCassetteVhs: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,3H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H24V6.5c0-1.93-1.57-3.5-3.5-3.5ZM3,18V8H21v10H3Zm7-8h4v6h-4v-6Zm8,0s1,1.12,1,3-1,3-1,3h-2v-6h2Zm-12,0h2v6h-2s-1-1.12-1-3,1-3,1-3Z"/></svg>
);

FiBsCassetteVhs.displayName = 'FiBsCassetteVhs';

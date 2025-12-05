import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSitemap: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,17v6h-6v-6h1.5v-3.5c0-.28-.22-.5-.5-.5h-5.5v4h1.5v6h-6v-6h1.5v-4H5c-.28,0-.5,.22-.5,.5v3.5h1.5v6H0v-6H1.5v-3.5c0-1.93,1.57-3.5,3.5-3.5h5.5v-3h-1.5V1h6V7h-1.5v3h5.5c1.93,0,3.5,1.57,3.5,3.5v3.5h1.5Z"/></svg>
);

FiBsSitemap.displayName = 'FiBsSitemap';

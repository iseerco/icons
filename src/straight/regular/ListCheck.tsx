import React from 'react';
import type { IconProps } from '../../types';

export const ListCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m1.878 5.121-1.585-1.585 1.414-1.414 1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.586-3.585 1.414 1.414-3.586 3.585a3 3 0 0 1 -4.243 0zm10.122-.121h12v-2h-12zm-8 9a2.978 2.978 0 0 0 2.121-.879l3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a2.982 2.982 0 0 0 2.122.879zm8-1h12v-2h-12zm-8 9a2.978 2.978 0 0 0 2.121-.879l3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a2.982 2.982 0 0 0 2.122.879zm8-1h12v-2h-12z"/></svg>
);

ListCheck.displayName = 'ListCheck';

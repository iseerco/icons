import React from 'react';
import type { IconProps } from '../../types';

export const ListCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m4 6a2.982 2.982 0 0 1 -2.122-.879l-1.585-1.585 1.414-1.414 1.586 1.585a1.023 1.023 0 0 0 1.414 0l3.586-3.585 1.414 1.414-3.586 3.585a2.978 2.978 0 0 1 -2.121.879zm20-3h-12v2h12zm-17.879 10.121 3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a3 3 0 0 0 4.243 0zm17.879-2.121h-12v2h12zm-17.879 10.121 3.586-3.585-1.414-1.414-3.586 3.585a1.023 1.023 0 0 1 -1.414 0l-1.586-1.585-1.414 1.414 1.585 1.585a3 3 0 0 0 4.243 0zm17.879-2.121h-12v2h12z"/></svg>
);

ListCheck.displayName = 'ListCheck';

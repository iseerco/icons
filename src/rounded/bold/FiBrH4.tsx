import React from 'react';
import type { IconProps } from '../../types';

export const FiBrH4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,4.5v15c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5v-6.5H3v6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5V4.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5v5.5h6v-5.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5Zm10.5-1.5c-.828,0-1.5.672-1.5,1.5v6.5h-3.5c-.275,0-.5-.225-.5-.5v-6c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v6c0,1.93,1.57,3.5,3.5,3.5h3.5v5.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5V4.5c0-.828-.672-1.5-1.5-1.5Z"/></svg>
);

FiBrH4.displayName = 'FiBrH4';

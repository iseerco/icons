import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBlogText: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,2H3.5C1.57,2,0,3.57,0,5.5V22H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,19V7H21v12H3Zm2-10h7v3h-2v5h-3v-5h-2v-3Zm9,0h5v3h-5v-3Zm0,5h5v3h-5v-3Z"/></svg>
);

FiBsBlogText.displayName = 'FiBsBlogText';

import React from 'react';
import type { IconProps } from '../../types';

export const CrossReligion: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,7h-4V3c0-1.654-1.346-3-3-3s-3,1.346-3,3V7H5c-1.654,0-3,1.346-3,3s1.346,3,3,3h4v8c0,1.654,1.346,3,3,3s3-1.346,3-3V13h4c1.654,0,3-1.346,3-3s-1.346-3-3-3Z"/></svg>
);

CrossReligion.displayName = 'CrossReligion';

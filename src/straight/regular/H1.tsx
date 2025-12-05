import React from 'react';
import type { IconProps } from '../../types';

export const H1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m12,4h2v16h-2v-7H4v7h-2V4h2v7h8v-7Zm8.492,0l-3.708,3.802,1.432,1.396,1.784-1.829v12.631h2V4h-1.508Z"/></svg>
);

H1.displayName = 'H1';

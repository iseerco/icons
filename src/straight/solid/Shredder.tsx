import React from 'react';
import type { IconProps } from '../../types';

export const Shredder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,5H5V0h14V5Zm5,5c0-1.65-1.35-3-3-3H3c-1.65,0-3,1.35-3,3v6H24v-6ZM5,18H3v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Zm4,0h-2v6h2v-6Z"/></svg>
);

Shredder.displayName = 'Shredder';

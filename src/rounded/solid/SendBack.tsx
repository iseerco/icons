import React from 'react';
import type { IconProps } from '../../types';

export const SendBack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m7,11h-3c-2.206,0-4-1.794-4-4v-3C0,1.794,1.794,0,4,0h3c2.206,0,4,1.794,4,4v3c0,2.206-1.794,4-4,4Zm13,13h-3c-2.206,0-4-1.794-4-4v-3c0-2.206,1.794-4,4-4h3c2.206,0,4,1.794,4,4v3c0,2.206-1.794,4-4,4Zm-9-7c0-3.309,2.691-6,6-6h1v-1c0-2.206-1.794-4-4-4h-1v1c0,3.309-2.691,6-6,6h-1v1c0,2.206,1.794,4,4,4h1v-1Z"/></svg>
);

SendBack.displayName = 'SendBack';

import React from 'react';
import type { IconProps } from '../../types';

export const Bank: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 10v-2.091a3 3 0 0 0 -1.563-2.634l-9-4.909a2.993 2.993 0 0 0 -2.874 0l-9 4.909a3 3 0 0 0 -1.563 2.634v2.091h3v9h-2v3h-1v2h24v-2h-1v-3h-2v-9zm-10 0v9h-4v-9zm-9 0h3v9h-3zm14 9h-3v-9h3z"/></svg>
);

Bank.displayName = 'Bank';

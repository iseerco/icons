import React from 'react';
import type { IconProps } from '../../types';

export const Mailbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,3H6C2.691,3,0,5.691,0,9v12H24V9c0-3.309-2.691-6-6-6ZM10,19H2V9c0-2.206,1.794-4,4-4s4,1.794,4,4v10Zm12,0H12V9c0-1.535-.58-2.938-1.532-4h7.532c2.206,0,4,1.794,4,4v10ZM14,9h6v4h-2v-2h-4v-2Zm-10,0h4v2H4v-2Z"/></svg>
);

Mailbox.displayName = 'Mailbox';

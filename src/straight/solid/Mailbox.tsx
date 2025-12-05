import React from 'react';
import type { IconProps } from '../../types';

export const Mailbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10,8c0-2.757-2.243-5-5-5S0,5.243,0,8v13H10V8Zm-3,3H3v-2H7v2ZM18,3H9.894c1.299,1.271,2.106,3.043,2.106,5v13h12V9c0-3.309-2.691-6-6-6Zm3,10h-2v-2h-4v-2h6v4Z"/></svg>
);

Mailbox.displayName = 'Mailbox';

import React from 'react';
import type { IconProps } from '../../types';

export const MailboxFlagUp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m10,8c0-2.757-2.243-5-5-5S0,5.243,0,8v13h10v-13Zm-3,3H3v-2h4v2ZM18,3h-8.106c1.299,1.271,2.106,3.043,2.106,5v13h12v-12c0-3.309-2.691-6-6-6Zm2,2v2h-2s0,4,0,4h-2v-6h4Z"/>
</svg>
);

MailboxFlagUp.displayName = 'MailboxFlagUp';

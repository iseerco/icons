import React from 'react';
import type { IconProps } from '../../types';

export const Qrcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M0,0V11H11V0H0ZM7,7h-3v-3h3v3ZM13,0V11h11V0H13Zm7,7h-3v-3h3v3ZM0,13v11H11V13H0Zm7,7h-3v-3h3v3Zm10-3h-4v-4h4v4Zm3,3h-3v-3h3v3Zm-3,4h-4v-4h4v4Zm7-7h-4v-4h4v4Z"/></svg>
);

Qrcode.displayName = 'Qrcode';

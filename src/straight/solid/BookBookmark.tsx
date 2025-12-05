import React from 'react';
import type { IconProps } from '../../types';

export const BookBookmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M4,18c-.738-.001-1.451,.271-2,.765V3C2,1.343,3.343,0,5,0h1V18h-2ZM20,0h-2V11l-2.5-2.5-2.5,2.5V0h-5V18h14V2c0-1.105-.895-2-2-2ZM2,22c0,1.105,.895,2,2,2H22v-4H4c-1.105,0-2,.895-2,2Z"/></svg>
);

BookBookmark.displayName = 'BookBookmark';

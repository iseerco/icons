import React from 'react';
import type { IconProps } from '../../types';

export const FileInvoice: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,18H8v-3h8v3Zm6-11V24H2V3C2,1.343,3.343,0,5,0H15V7h7Zm-16,0h5v-2H6v2Zm0,4h5v-2H6v2Zm12,2H6v7h12v-7ZM17,.586V5h4.414L17,.586Z"/></svg>
);

FileInvoice.displayName = 'FileInvoice';

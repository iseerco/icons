import React from 'react';
import type { IconProps } from '../../types';

export const FileInvoice: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M14.414,0H5c-1.654,0-3,1.346-3,3V24H22V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586V3.414Zm5,18.586H4V3c0-.551,.449-1,1-1H13v7h7v13Zm-14-2h12v-7H6v7Zm2-5h8v3H8v-3Zm3-4H6v-2h5v2Zm0-4H6v-2h5v2Z"/></svg>
);

FileInvoice.displayName = 'FileInvoice';

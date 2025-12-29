import React from 'react';
import type { IconProps } from '../../types';

export const Barcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M2,22H0V2H2V22ZM6,2h-2V22h2V2Zm15,0h-2V22h2V2Zm-8,0h-2V22h2V2Zm-3,0h-3V22h3V2Zm8,0h-3V22h3V2Zm6,0h-2V22h2V2Z"/></svg>
);

Barcode.displayName = 'Barcode';

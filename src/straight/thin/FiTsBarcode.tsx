import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBarcode: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1,22H0V2H1V22ZM21,2h-1V22h1V2Zm-9,0h-1V22h1V2Zm-6,0h-2V22h2V2Zm3,0h-2V22h2V2Zm9,0h-2V22h2V2Zm-3,0h-1V22h1V2Zm9,0h-1V22h1V2Z"/></svg>
);

FiTsBarcode.displayName = 'FiTsBarcode';

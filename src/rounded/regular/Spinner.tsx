import React from 'react';
import type { IconProps } from '../../types';

export const Spinner: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24A12,12,0,1,1,22.714,6.59a1,1,0,1,1-1.785.9,10,10,0,1,0-.011,9.038,1,1,0,0,1,1.781.908A11.955,11.955,0,0,1,12,24Z"/></svg>
);

Spinner.displayName = 'Spinner';

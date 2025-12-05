import React from 'react';
import type { IconProps } from '../../types';

export const FiBrColumns3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.5,2H5.5C2.467,2,0,4.467,0,7.5v9c0,3.033,2.467,5.5,5.5,5.5h13c3.033,0,5.5-2.467,5.5-5.5V7.5c0-3.033-2.467-5.5-5.5-5.5Zm-4.5,3v14h-4V5h4ZM3,16.5V7.5c0-1.378,1.122-2.5,2.5-2.5h1.5v14h-1.5c-1.378,0-2.5-1.122-2.5-2.5Zm18,0c0,1.378-1.122,2.5-2.5,2.5h-1.5V5h1.5c1.378,0,2.5,1.122,2.5,2.5v9Z"/></svg>
);

FiBrColumns3.displayName = 'FiBrColumns3';

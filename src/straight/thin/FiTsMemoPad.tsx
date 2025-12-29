import React from 'react';
import type { IconProps } from '../../types';

export const FiTsMemoPad: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19.5,0H4.5c-1.378,0-2.5,1.121-2.5,2.5v21.5h20V2.5c0-1.379-1.122-2.5-2.5-2.5ZM4.5,1h15c.827,0,1.5.673,1.5,1.5v2.5H3v-2.5c0-.827.673-1.5,1.5-1.5Zm-1.5,22V6h18v17H3Zm3-13h12v1H6v-1Zm0,4h8v1H6v-1Z"/></svg>
);

FiTsMemoPad.displayName = 'FiTsMemoPad';

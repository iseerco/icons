import React from 'react';
import type { IconProps } from '../../types';

export const FiTsChessPawn: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,18v-4h3v-1h-4.413c2.04-1.225,3.413-3.452,3.413-6,0-3.859-3.14-7-7-7S5,3.141,5,7c0,2.548,1.373,4.775,3.413,6H4v1h3v4c0,2.757-2.243,5-5,5v1H22v-1c-2.757,0-5-2.243-5-5ZM6,7c0-3.309,2.691-6,6-6s6,2.691,6,6-2.691,6-6,6-6-2.691-6-6Zm-.687,16c1.618-1.076,2.687-2.915,2.687-5v-4h8v4c0,2.085,1.068,3.924,2.687,5H5.313Z"/></svg>
);

FiTsChessPawn.displayName = 'FiTsChessPawn';

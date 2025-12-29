import React from 'react';
import type { IconProps } from '../../types';

export const FiTsShekelSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,24.09h-1V0h6.5c4.136,0,7.5,3.364,7.5,7.5v10.5h-1V7.5c0-3.584-2.916-6.5-6.5-6.5H3V24.09ZM22,15.917V0h-1V15.917c0,3.905-3.178,7.083-7.083,7.083h-4.917V6h-1V24h5.917c4.457,0,8.083-3.626,8.083-8.083Z"/></svg>
);

FiTsShekelSign.displayName = 'FiTsShekelSign';

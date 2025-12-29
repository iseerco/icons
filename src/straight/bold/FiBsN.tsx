import React from 'react';
import type { IconProps } from '../../types';

export const FiBsN: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19.312,24c-.893,0-1.736-.447-2.24-1.232L5,3.789V24H2V2.679C2,1.48,2.772,.448,3.923,.11c1.15-.336,2.358,.113,3.006,1.121l12.071,18.979V0h3V21.32c0,1.199-.773,2.231-1.924,2.569-.254,.074-.512,.11-.765,.11Z"/></svg>
);

FiBsN.displayName = 'FiBsN';

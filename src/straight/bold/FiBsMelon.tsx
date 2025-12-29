import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMelon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.005,1,18.949-.061-.064,18.947.992,20A13.442,13.442,0,1,0,20.005,1Zm-2.111,16.9a10.464,10.464,0,0,1-13.661.981l3.64-3.64a5.379,5.379,0,0,0,7.361-7.359l3.64-3.639A10.471,10.471,0,0,1,17.894,17.892Z"/></svg>
);

FiBsMelon.displayName = 'FiBsMelon';

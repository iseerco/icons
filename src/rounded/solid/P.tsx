import React from 'react';
import type { IconProps } from '../../types';

export const P: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,24c-.552,0-1-.447-1-1V5C2,2.243,4.243,0,7,0h7.5c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5H4v8c0,.553-.448,1-1,1Zm1-11H14.5c3.033,0,5.5-2.468,5.5-5.5s-2.467-5.5-5.5-5.5H7c-1.654,0-3,1.346-3,3V13Z"/></svg>
);

P.displayName = 'P';

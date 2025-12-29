import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFilePowerpoint: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,17c0,.55-.45,1-1,1h-1v-2h1c.55,0,1,.45,1,1Zm9,7H2V3c0-1.65,1.35-3,3-3h11.38l5.62,5.66V24ZM5,12h14V8h-5V3H5V12Zm10,5c0-1.66-1.34-3-3-3h-3v8h2v-2h1c1.66,0,3-1.34,3-3Z"/></svg>
);

FiBsFilePowerpoint.displayName = 'FiBsFilePowerpoint';

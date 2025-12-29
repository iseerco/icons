import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBed: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,5h-7A3.5,3.5,0,0,0,10,8.5V13H3V2H0V22H3V19H21v3h3V8.5A3.5,3.5,0,0,0,20.5,5ZM13,13V8.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V13ZM6.5,12A2.5,2.5,0,1,1,9,9.5,2.5,2.5,0,0,1,6.5,12Z"/></svg>
);

FiBsBed.displayName = 'FiBsBed';

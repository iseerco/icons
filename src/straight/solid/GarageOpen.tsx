import React from 'react';
import type { IconProps } from '../../types';

export const GarageOpen: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,16H7V13H17Zm7-5.957a2.981,2.981,0,0,0-1.151-2.362l-9-7.044a3,3,0,0,0-3.7,0l-9,7.042A2.985,2.985,0,0,0,0,10.043V24H5V12a1,1,0,0,1,1-1H18a1,1,0,0,1,1,1V24h5Z"/></svg>
);

GarageOpen.displayName = 'GarageOpen';

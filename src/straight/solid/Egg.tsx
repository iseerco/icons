import React from 'react';
import type { IconProps } from '../../types';

export const Egg: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C6.294,0,2,8.493,2,14a10,10,0,0,0,20,0C22,8.493,17.706,0,12,0Zm1,7a1,1,0,1,1,1,1A1,1,0,0,1,13,7Zm2.5,6A1.5,1.5,0,1,1,17,11.5,1.5,1.5,0,0,1,15.5,13Z"/></svg>
);

Egg.displayName = 'Egg';

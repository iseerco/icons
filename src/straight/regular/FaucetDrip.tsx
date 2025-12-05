import React from 'react';
import type { IconProps } from '../../types';

export const FaucetDrip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,8h-4v-3h5v-2H4v2h5v3H0v2h9v4H0v2h15c.552,0,1,.448,1,1v2h8v-2c0-4.963-4.037-9-9-9Zm3,9c0-1.654-1.346-3-3-3h-4v-4h4c3.859,0,7,3.141,7,7h-4Z"/>
</svg>
);

FaucetDrip.displayName = 'FaucetDrip';

import React from 'react';
import type { IconProps } from '../../types';

export const SendBackward: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,24h-6c-2.757,0-5-2.243-5-5v-6c0-2.757,2.243-5,5-5h6c2.757,0,5,2.243,5,5v6c0,2.757-2.243,5-5,5Zm-14-8c-2.757,0-5-2.243-5-5v-6C0,2.243,2.243,0,5,0h6c2.757,0,5,2.243,5,5,0,.553-.448,1-1,1h-2c-3.86,0-7,3.141-7,7v2c0,.553-.448,1-1,1Z"/></svg>
);

SendBackward.displayName = 'SendBackward';

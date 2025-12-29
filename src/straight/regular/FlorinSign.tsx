import React from 'react';
import type { IconProps } from '../../types';

export const FlorinSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.38,2.59l-3.37,7.41h4.99v2h-5.9l-4.66,10.24c-.49,1.07-1.56,1.76-2.73,1.76H0v-2H5.71c.39,0,.75-.23,.91-.59l4.28-9.41H6v-2h5.81L15.56,1.76c.49-1.07,1.56-1.76,2.73-1.76h5.71V2h-5.71c-.39,0-.75,.23-.91,.59Z"/></svg>
);

FlorinSign.displayName = 'FlorinSign';

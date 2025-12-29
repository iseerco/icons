import React from 'react';
import type { IconProps } from '../../types';

export const FiBs0: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-4.411,0-8-3.589-8-8V8C4,3.589,7.589,0,12,0s8,3.589,8,8v8c0,4.411-3.589,8-8,8Zm0-21c-2.757,0-5,2.243-5,5v8c0,2.757,2.243,5,5,5s5-2.243,5-5V8c0-2.757-2.243-5-5-5Z"/></svg>
);

FiBs0.displayName = 'FiBs0';

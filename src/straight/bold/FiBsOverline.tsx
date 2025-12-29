import React from 'react';
import type { IconProps } from '../../types';

export const FiBsOverline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,24c-4.411,0-8-3.589-8-8v-3c0-4.411,3.589-8,8-8s8,3.589,8,8v3c0,4.411-3.589,8-8,8Zm0-16c-2.757,0-5,2.243-5,5v3c0,2.757,2.243,5,5,5s5-2.243,5-5v-3c0-2.757-2.243-5-5-5ZM22,0H2V3H22V0Z"/></svg>
);

FiBsOverline.displayName = 'FiBsOverline';

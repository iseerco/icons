import React from 'react';
import type { IconProps } from '../../types';

export const InputPipe: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,3H5C2.243,3,0,5.243,0,8v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm-13,13c0,.553-.448,1-1,1s-1-.447-1-1v-8c0-.553.448-1,1-1s1,.447,1,1v8Z"/></svg>
);

InputPipe.displayName = 'InputPipe';

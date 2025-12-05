import React from 'react';
import type { IconProps } from '../../types';

export const Tally3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m2,1v22c0,.552-.447,1-1,1s-1-.448-1-1V1C0,.448.447,0,1,0s1,.448,1,1ZM15,0c-.553,0-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Zm-7,0c-.553,0-1,.448-1,1v22c0,.552.447,1,1,1s1-.448,1-1V1c0-.552-.447-1-1-1Z"/></svg>
);

Tally3.displayName = 'Tally3';
